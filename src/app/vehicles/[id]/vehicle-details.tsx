'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useTheme } from "styled-components";

import { IVehicle, NOTES_TABLE, VEHICLES_TABLE, supabaseClient } from "@/supabase";
import { FlexWrap, Icon, IconButton, IconName, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useDrawer, useLanguage, useModal, useSnackbar } from "@/contexts";

interface IVehicleDetailsProps extends IVehicle {}

export const VehicleDetails: FC<IVehicleDetailsProps> = ({
  id,
  brand,
  model,
  plateNumber,
  notes,
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      body: <Typography variant="h1">Add stuff to vehicle</Typography>,
    });
  };

  const handleDelete = async () => {
    const { error: vehicleError } = await supabaseClient.from(VEHICLES_TABLE).delete().eq('id', id);
    const { error: noteError } = await supabaseClient.from(NOTES_TABLE).delete().eq('id', notes.id);

    if (vehicleError || noteError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedVehicle,
      });
    } else {
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
              name={notes.type as IconName}
              height={30}
              width={30}
              color={colors.primaryText}
            />
          </FlexWrap>
        </FlexWrap>
        <FlexWrap align="center" gap={1}>
          <IconButton
            iconName="trash"
            variant="error"
            height={22}
            width={20}
            onClick={handleShowDeleteConfirmation}
          />
          <IconButton
            iconName="add"
            height={22}
            width={22}
            onClick={handleShowVehicleForm}
          />
        </FlexWrap>
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.plateNumber}</Typography>
          <Typography variant="label">{plateNumber}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.model}</Typography>
          <Typography variant="label">{model}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.dateOfPurchase}</Typography>
          <Typography variant="label">{formatDate(notes.date)}</Typography>
        </FlexWrap>
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">Description</Typography>
            <Typography variant="p">{notes.description}</Typography>
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
