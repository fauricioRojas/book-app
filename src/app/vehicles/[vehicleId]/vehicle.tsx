'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { Actions } from '@/components';
import {
  useDrawer,
  useLanguage,
  useModal,
  useSnackbar,
  useSupabase,
} from '@/contexts';
import { useDidUpdate } from '@/hooks';
import { FlexWrap, Icon, PhotoPreview, Typography } from '@/shared/components';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/utils';
import {
  ACTIONS,
  SCHEMAS,
  SELECT,
  TABLES,
  TMaintenance,
  TVehicle,
} from '@/supabase';
import { VehiclesForm } from '../vehicles-form';
import { MaintenancesForm } from './maintenances-form';
import { MaintenancesList } from './maintenances-list';

const abortController = new AbortController();

type VehicleProps = {
  serverVehicle: TVehicle;
};

export const Vehicle: FC<VehicleProps> = ({ serverVehicle }) => {
  const [{ id, brand, model, plateNumber, notes, maintenances }, setVehicle] =
    useState<TVehicle>(serverVehicle);
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
      .on(
        'postgres_changes',
        {
          event: ACTIONS.UPDATE,
          schema: SCHEMAS.PUBLIC,
          table: TABLES.VEHICLES,
        },
        async (payload: any) => {
          const updatedVehicle = await findVehicleById(payload.new.id);
          if (updatedVehicle) {
            setVehicle((prevVehicle: TVehicle) => ({
              ...prevVehicle,
              ...updatedVehicle,
            }));
          }
        },
      )
      .subscribe();
    const maintenanceChannel = supabaseClient
      .channel('maintenance')
      .on(
        'postgres_changes',
        {
          event: ACTIONS.INSERT,
          schema: SCHEMAS.PUBLIC,
          table: TABLES.MAINTENANCES,
        },
        async (payload: any) => {
          const newlyAddedMaintenance = await findMaintenanceById(
            payload.new.id,
          );
          if (newlyAddedMaintenance) {
            setVehicle((prevVehicle: TVehicle) => ({
              ...prevVehicle,
              maintenances: prevVehicle.maintenances.concat(
                newlyAddedMaintenance,
              ),
            }));
          }
        },
      )
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
      .select<string, TVehicle>(SELECT.FULL_VEHICLE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const findMaintenanceById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.MAINTENANCES)
      .select<string, TMaintenance>(SELECT.FULL_MAINTENANCE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const handleShowMaintenancesForm = () => {
    showDrawer({
      title: translation.newMaintenance,
      children: <MaintenancesForm vehicleId={id} />,
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
      children: (
        <VehiclesForm
          defaultValues={defaultValues}
          vehicleId={id}
          noteId={notes.id}
        />
      ),
    });
  };

  const handleDelete = async () => {
    const [
      { error: maintenancesError },
      { error: noteError },
      { error: vehicleError },
    ] = await Promise.all([
      supabaseClient.from(TABLES.MAINTENANCES).delete().eq('vehicleId', id),
      supabaseClient.from(TABLES.NOTES).delete().eq('id', notes.id),
      supabaseClient.from(TABLES.VEHICLES).delete().eq('id', id),
    ]);

    if (maintenancesError || noteError || vehicleError) {
      showSnackbar({
        type: 'error',
        message: translation.notDeletedVehicle,
      });
    } else {
      router.push(ROUTES.VEHICLES);
      showSnackbar({
        type: 'success',
        message: translation.deletedVehicle,
      });
    }
  };

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
            <Typography variant="h3" fontWeight="bold">
              {brand}
            </Typography>
            <Icon
              name={ICON_BY_TYPE[notes.type]}
              height={25}
              width={25}
              color={colors.primaryText}
            />
          </FlexWrap>
        </FlexWrap>
        <Actions
          onDelete={handleShowDeleteConfirmation}
          onEdit={handleShowVehiclesFormInEditMode}
          onAdd={handleShowMaintenancesForm}
        />
      </FlexWrap>
      <FlexWrap direction="column" gap={4} mb={8}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            {translation.plateNumber}
          </Typography>
          <Typography variant="label" color="secondary-text">
            {plateNumber}
          </Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            {translation.model}
          </Typography>
          <Typography variant="label" color="secondary-text">
            {model}
          </Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            {translation.dateOfPurchase}
          </Typography>
          <Typography variant="label" color="secondary-text">
            {formatDate(notes.date)}
          </Typography>
        </FlexWrap>
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">
              {translation.description}
            </Typography>
            <Typography variant="p" color="secondary-text">
              {notes.description}
            </Typography>
          </FlexWrap>
        )}
        {notes.photo && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">
              {translation.photo}
            </Typography>
            <PhotoPreview photo={notes.photo} />
          </FlexWrap>
        )}
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            {translation.maintenances}
          </Typography>
          <MaintenancesList maintenances={maintenances} />
        </FlexWrap>
      </FlexWrap>
    </>
  );
};
