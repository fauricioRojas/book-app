'use client';

import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ACTIONS, TMaintenance, SCHEMAS, SELECT, TABLES } from "@/supabase";
import {
  FlexWrap,
  Icon,
  PhotoPreview,
  Typography,
  snackbarService,
} from "@/shared/components";
import { formatDate, formatLength, formatMoney } from "@/shared/utils";
import { useDrawer, useLanguage, useMeasure, useModal, useSupabase } from "@/contexts";
import { ICON_BY_TYPE, ROUTES } from "@/shared/constants";
import { useDidUpdate } from "@/hooks";
import { Actions } from "@/components";
import { MaintenancesForm } from "../../maintenances-form";

const { showSnackbar } = snackbarService;
const abortController = new AbortController();

type MaintenanceProps = {
  serverMaintenance: TMaintenance;
}

export const Maintenance: FC<MaintenanceProps> = ({
  serverMaintenance
}) => {
  const [{
    id,
    notes,
    cost,
    kilometers,
    vehicles: {
      id: vehicleId,
    }
  }, setMaintenance] = useState<TMaintenance>(serverMaintenance);
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { currency, lengthUnit } = useMeasure();
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setMaintenance(serverMaintenance), [serverMaintenance]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('maintenance')
      .on('postgres_changes', {
        event: ACTIONS.UPDATE,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.MAINTENANCES,
      }, async (payload: any) => {
        const updatedMaintenance = await findMaintenanceById(payload.new.id);
        if (updatedMaintenance) {
          setMaintenance(updatedMaintenance);
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findMaintenanceById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.MAINTENANCES)
      .select<string, TMaintenance>(SELECT.FULL_MAINTENANCE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const handleShowFormInEditMode = () => {
    const defaultValues = {
      cost: cost.toString(),
      kilometers: (kilometers || '').toString(),
      type: notes.type,
      date: notes.date,
      description: notes.description || '',
      photo: notes.photo,
    };
    showDrawer({
      title: translation.editMaintenance,
      body: (
        <MaintenancesForm
          defaultValues={defaultValues}
          maintenanceId={id}
          vehicleId={vehicleId}
          noteId={notes.id}
        />
      ),
    });
  };

  const handleDelete = async () => {
    const [
      { error: noteError },
      { error: maintenanceError }
    ] = await Promise.all([
      supabaseClient.from(TABLES.NOTES).delete().eq('id', notes.id),
      supabaseClient.from(TABLES.MAINTENANCES).delete().eq('id', id),
    ]);

    console.log('noteError: ', noteError);
    console.log('maintenanceError: ', maintenanceError);
    if (noteError || maintenanceError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedMaintenance,
      });
    } else {
      router.push(`${ROUTES.VEHICLES}/${vehicleId}`);
      showSnackbar({
        type: 'success',
        body: translation.deletedMaintenance,
      });
    }
  }

  const handleShowDeleteConfirmation = () => {
    showConfirmationModal({
      title: translation.maintenanceDeleteConfirmation,
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
          <Icon
            name={ICON_BY_TYPE[notes.type]}
            height={25}
            width={25}
            color={colors.primaryText}
          />
        </FlexWrap>
        <Actions
          onDelete={handleShowDeleteConfirmation}
          onEdit={handleShowFormInEditMode}
        />
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap gap={4}>
          <FlexWrap direction="column" basis="50%" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.date}</Typography>
            <Typography variant="label" color="secondary-text">{formatDate(notes.date)}</Typography>
          </FlexWrap>
          <FlexWrap direction="column" basis="50%" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.cost}</Typography>
            <Typography variant="label" color="secondary-text">{formatMoney(cost, currency)}</Typography>
          </FlexWrap>
        </FlexWrap>
        {kilometers && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.weight}</Typography>
            <Typography variant="label" color="secondary-text">{formatLength(kilometers, lengthUnit)}</Typography>
          </FlexWrap>
        )}
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.description}</Typography>
            <Typography variant="p" color="secondary-text">{notes.description}</Typography>
          </FlexWrap>
        )}
        {notes.photo && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.photo}</Typography>
            <PhotoPreview photo={notes.photo} />
          </FlexWrap>
        )}
      </FlexWrap>
    </>
  );
};
