'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useTheme } from "styled-components";

import { IMaintenance, MAINTENANCES_TABLE, supabaseClient } from "@/supabase";
import { FlexWrap, Icon, IconButton, PhotoPreview, Typography } from "@/shared/components";
import { formatDate, formatLength, formatMoney } from "@/shared/utils";
import { useDrawer, useLanguage, useMeasure, useModal, useSnackbar } from "@/contexts";
import { ICON_BY_TYPE } from "@/shared/constants";
import { MaintenancesForm } from "../../maintenances-form";

interface IMaintenanceDetailsProps extends IMaintenance {}

export const MaintenanceDetails: FC<IMaintenanceDetailsProps> = ({
  id,
  notes,
  cost,
  kilometers,
  vehicles: {
    id: vehicleId,
  }
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();
  const { currency, lengthUnit } = useMeasure();

  const handleShowFormInEditMode = () => {
    const defaultValues = {
      cost: cost.toString(),
      kilometers: kilometers ? kilometers.toString() : undefined,
      type: notes.type,
      date: notes.date,
      description: notes.description ?? '',
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
    const { error } = await supabaseClient.from(MAINTENANCES_TABLE).delete().eq('id', id);

    if (error) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedMaintenance,
      });
    } else {
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
            onClick={handleShowFormInEditMode}
          />
        </FlexWrap>
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap gap={4}>
          <FlexWrap direction="column" basis="50%" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.date}</Typography>
            <Typography variant="label">{formatDate(notes.date)}</Typography>
          </FlexWrap>
          <FlexWrap direction="column" basis="50%" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.cost}</Typography>
            <Typography variant="label">{formatMoney(cost, currency)}</Typography>
          </FlexWrap>
        </FlexWrap>
        {kilometers && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.weight}</Typography>
            <Typography variant="label">{formatLength(kilometers, lengthUnit)}</Typography>
          </FlexWrap>
        )}
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.description}</Typography>
            <Typography variant="p">{notes.description}</Typography>
          </FlexWrap>
        )}
        {notes.photo && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.photo}</Typography>
            <PhotoPreview photo={notes.photo} />
          </FlexWrap>
        )}
      </FlexWrap>
    </>
  );
};
