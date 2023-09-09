'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useTheme } from "styled-components";

import { IProcedure, PROCEDURES_TABLE, supabaseClient } from "@/supabase";
import { FlexWrap, Icon, IconButton, PhotoPreview, Popover, Typography } from "@/shared/components";
import { formatDate, formatMoney, formatWeight } from "@/shared/utils";
import { useDrawer, useLanguage, useMeasure, useModal, useSnackbar } from "@/contexts";
import { ICON_BY_TYPE } from "@/shared/constants";
import { ProceduresForm } from "../../procedures-form";

interface IProcedureDetailsProps extends IProcedure {}

export const ProcedureDetails: FC<IProcedureDetailsProps> = ({
  id,
  notes,
  cost,
  weight,
  nextDate,
  pets: {
    id: petId,
  }
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();
  const { currency, weightUnit } = useMeasure();

  const handleShowFormInEditMode = () => {
    const defaultValues = {
      cost: cost.toString(),
      weight: weight ? weight.toString() : undefined,
      nextDate: nextDate,
      type: notes.type,
      date: notes.date,
      description: notes.description ?? '',
      photo: notes.photo,
    };
    showDrawer({
      title: translation.editProcedure,
      body: (
        <ProceduresForm
          defaultValues={defaultValues}
          procedureId={id}
          petId={petId}
          noteId={notes.id}
        />
      ),
    });
  };

  const handleDelete = async () => {
    const { error } = await supabaseClient.from(PROCEDURES_TABLE).delete().eq('id', id);

    if (error) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedProcedure,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.deletedProcedure,
      });
    }
  }

  const handleShowDeleteConfirmation = () => {
    showConfirmationModal({
      title: translation.procedureDeleteConfirmation,
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
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.cost}</Typography>
          <Typography variant="label">{formatMoney(cost, currency)}</Typography>
        </FlexWrap>
        {weight && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h6" fontWeight="bold">{translation.weight}</Typography>
            <Typography variant="label">{formatWeight(weight, weightUnit)}</Typography>
          </FlexWrap>
        )}
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">{translation.date}</Typography>
          <Typography variant="label">{formatDate(notes.date)}</Typography>
        </FlexWrap>
        {nextDate && (
          <FlexWrap direction="column" gap={2}>
            <FlexWrap align="center" gap={1}>
              <Typography variant="h6" fontWeight="bold">{translation.nextDate}</Typography>
              <Popover description={translation.nextDateHint} />
            </FlexWrap>
            <Typography variant="label">{formatDate(nextDate)}</Typography>
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
