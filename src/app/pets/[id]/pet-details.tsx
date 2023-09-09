'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useTheme } from "styled-components";

import { IPet, NOTES_TABLE, PETS_TABLE, supabaseClient } from "@/supabase";
import { FlexWrap, Icon, IconButton, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useDrawer, useLanguage, useModal, useSnackbar } from "@/contexts";
import { ICON_BY_TYPE } from "@/shared/constants";
import { ProceduresForm } from "./procedures-form";
import { ProceduresList } from "./procedures-list";

interface IPetDetailsProps extends IPet {}

export const PetDetails: FC<IPetDetailsProps> = ({
  id,
  name,
  breed,
  notes,
  procedures
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newProcedure,
      body: <ProceduresForm petId={id} />,
    });
  };

  const handleDelete = async () => {
    const { error: petError } = await supabaseClient.from(PETS_TABLE).delete().eq('id', id);
    const { error: noteError } = await supabaseClient.from(NOTES_TABLE).delete().eq('id', notes.id);

    if (petError || noteError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedPet,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.deletedPet,
      });
    }
  }

  const handleShowDeleteConfirmation = () => {
    showConfirmationModal({
      title: translation.petDeleteConfirmation,
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
              {name}
            </Typography>
            <Icon
              name={ICON_BY_TYPE[notes.type]}
              height={25}
              width={25}
              color={colors.primaryText}
            />
          </FlexWrap>
        </FlexWrap>
        <FlexWrap align="center" gap={1}>
          <IconButton
            iconName="trash"
            variant="error"
            height={22}
            width={22}
            onClick={handleShowDeleteConfirmation}
          />
          <IconButton
            iconName="add"
            height={22}
            width={22}
            onClick={handleShowPetForm}
          />
        </FlexWrap>
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.breed}</Typography>
          <Typography variant="label">{breed}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.dateOfBirth}</Typography>
          <Typography variant="label">{formatDate(notes.date)}</Typography>
        </FlexWrap>
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
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.procedures}</Typography>
          <ProceduresList procedures={procedures} />
        </FlexWrap>
      </FlexWrap>
    </>
  );
};
