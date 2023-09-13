'use client';

import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ACTIONS, IMaintenance, IVehicle, SCHEMAS, SELECT, TABLES } from "@/supabase";
import { FlexWrap, Icon, IconButton, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useDrawer, useLanguage, useModal, useSnackbar, useSupabase } from "@/contexts";
import { ICON_BY_TYPE, ROUTES } from "@/shared/constants";
import { MaintenancesForm } from "./maintenances-form";
import { MaintenancesList } from "./maintenances-list";
import { VehiclesForm } from "../vehicles-form";
import { useDidUpdate } from "@/hooks";

const abortController = new AbortController();

interface IVehicleProps {
  serverVehicle: IVehicle;
}

export const Vehicle: FC<IVehicleProps> = ({ serverVehicle }) => {
  const [{
    id,
    brand,
    model,
    plateNumber,
    notes,
    maintenances,
  }, setVehicle] = useState<IVehicle>(serverVehicle);
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setVehicle(serverVehicle), [serverVehicle]);

  useEffect(() => {
    const vehicleChannel = supabaseClient
      .channel('vehicle')
      .on('postgres_changes', {
        event: ACTIONS.UPDATE,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.VEHICLES,
      }, async (payload: any) => {
        const updatedVehicle = await findVehicleById(payload.new.id);
        if (updatedVehicle) {
          setVehicle((prevVehicle: IVehicle) => ({
            ...prevVehicle,
            ...updatedVehicle,
          }));
        }
      })
      .subscribe();
    const maintenanceChannel = supabaseClient
      .channel('maintenance')
      .on('postgres_changes', {
        event: ACTIONS.INSERT,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.MAINTENANCES,
      }, async (payload: any) => {
        const newlyAddedMaintenance = await findMaintenanceById(payload.new.id);
        if (newlyAddedMaintenance) {
          setVehicle((prevVehicle: IVehicle) => ({
            ...prevVehicle,
            maintenances: prevVehicle.maintenances.concat(newlyAddedMaintenance),
          }));
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(vehicleChannel);
      supabaseClient.removeChannel(maintenanceChannel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findVehicleById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.VEHICLES)
      .select<string, IVehicle>(SELECT.FULL_VEHICLE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };
  
  const findMaintenanceById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.MAINTENANCES)
      .select<string, IMaintenance>(SELECT.FULL_MAINTENANCE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const handleShowMaintenancesForm = () => {
    showDrawer({
      title: translation.newMaintenance,
      body: <MaintenancesForm vehicleId={id} />,
    });
  };

  const handleShowVehiclesFormInEditMode = () => {
    const defaultValues = {
      plateNumber,
      brand,
      model: model.toString(),
      type: notes.type,
      dateOfPurchase: notes.date,
      description: notes.description || '',
      photo: notes.photo,
    };
    showDrawer({
      title: translation.editVehicle,
      body: <VehiclesForm defaultValues={defaultValues} vehicleId={id} noteId={notes.id} />,
    });
  };

  const handleDelete = async () => {
    const [
      { error: maintenancesError },
      { error: noteError },
      { error: vehicleError }
    ] = await Promise.all([
      supabaseClient.from(TABLES.MAINTENANCES).delete().eq('vehicleId', id),
      supabaseClient.from(TABLES.NOTES).delete().eq('id', notes.id),
      supabaseClient.from(TABLES.VEHICLES).delete().eq('id', id),
    ]);

    if (maintenancesError || noteError || vehicleError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedVehicle,
      });
    } else {
      router.push(ROUTES.VEHICLES);
      showSnackbar({
        type: 'success',
        body: translation.deletedVehicle,
      });
    }
  }

  const handleShowDeleteConfirmation = () => {
    showConfirmationModal({
      title: translation.vehicleDeleteConfirmation,
      buttonText: translation.delete,
      onClick: handleDelete,
    });
  };

  return (
    <>
      <FlexWrap align="center" justify="space-between" mb={8}>
        <FlexWrap align="center" gap={2}>
          <Icon
            name="arrow-back"
            height={25}
            width={25}
            color={colors.primaryText}
            onClick={router.back}
          />
          <FlexWrap align="center" gap={3}>
            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {brand}
            </Typography>
            <Icon
              name={ICON_BY_TYPE[notes.type]}
              height={30}
              width={30}
              color={colors.primaryText}
            />
          </FlexWrap>
        </FlexWrap>
        <FlexWrap align="center" gap={2} gapMd={1}>
          <IconButton
            iconName="trash"
            variant="error"
            height={22}
            width={22}
            onClick={handleShowDeleteConfirmation}
          />
          <IconButton
            iconName="pencil"
            height={25}
            width={25}
            onClick={handleShowVehiclesFormInEditMode}
          />
          <IconButton
            iconName="add"
            height={22}
            width={22}
            onClick={handleShowMaintenancesForm}
          />
        </FlexWrap>
      </FlexWrap>
      <FlexWrap direction="column" gap={4} mb={8}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.plateNumber}</Typography>
          <Typography variant="label" color="secondary-text">{plateNumber}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.model}</Typography>
          <Typography variant="label" color="secondary-text">{model}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.dateOfPurchase}</Typography>
          <Typography variant="label" color="secondary-text">{formatDate(notes.date)}</Typography>
        </FlexWrap>
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.description}</Typography>
            <Typography variant="p" color="secondary-text">{notes.description}</Typography>
          </FlexWrap>
        )}
        {notes.photo && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.photo}</Typography>
            <PhotoPreview photo={notes.photo} />
          </FlexWrap>
        )}
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.maintenances}</Typography>
          <MaintenancesList maintenances={maintenances} />
        </FlexWrap>
      </FlexWrap>
    </>
  );
};
