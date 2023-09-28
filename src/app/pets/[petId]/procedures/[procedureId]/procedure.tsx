'use client';

import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ACTIONS, TProcedure, SCHEMAS, SELECT, TABLES } from "@/supabase";
import {
  FlexWrap,
  Icon,
  PhotoPreview,
  Popover,
  Typography,
  snackbarService,
} from "@/shared/components";
import { formatDate, formatMoney, formatWeight } from "@/shared/utils";
import { useDrawer, useLanguage, useMeasure, useModal, useSupabase } from "@/contexts";
import { ICON_BY_TYPE, ROUTES } from "@/shared/constants";
import { useDidUpdate } from "@/hooks";
import { Actions } from "@/components";
import { ProceduresForm } from "../../procedures-form";

const { showSnackbar } = snackbarService;
const abortController = new AbortController();

type ProcedureProps = {
  serverProcedure: TProcedure;
}

export const Procedure: FC<ProcedureProps> = ({
  serverProcedure,
}) => {
  const [{
    id,
    notes,
    cost,
    weight,
    nextDate,
    pets: {
      id: petId,
    }
  }, setProcedure] = useState<TProcedure>(serverProcedure);
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { currency, weightUnit } = useMeasure();
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setProcedure(serverProcedure), [serverProcedure]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('procedure')
      .on('postgres_changes', {
        event: ACTIONS.UPDATE,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.PROCEDURES,
      }, async (payload: any) => {
        const updatedProcedure = await findProcedureById(payload.new.id);
        if (updatedProcedure) {
          setProcedure(updatedProcedure);
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  const findProcedureById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.PROCEDURES)
      .select<string, TProcedure>(SELECT.FULL_PROCEDURE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };
    
  const handleShowFormInEditMode = () => {
    const defaultValues = {
      cost: cost.toString(),
      weight: (weight || '').toString(),
      nextDate: nextDate || '',
      type: notes.type,
      date: notes.date,
      description: notes.description || '',
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
    const [
      { error: noteError },
      { error: procedureError }
    ] = await Promise.all([
      supabaseClient.from(TABLES.NOTES).delete().eq('id', notes.id),
      await supabaseClient.from(TABLES.PROCEDURES).delete().eq('id', id),
    ]);

    if (noteError || procedureError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedProcedure,
      });
    } else {
      router.push(`${ROUTES.PETS}/${petId}`);
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
        <FlexWrap gap={4}>
          {weight && (
            <FlexWrap direction="column" basis="50%" gap={2}>
              <Typography variant="h5" fontWeight="bold">{translation.weight}</Typography>
              <Typography variant="label" color="secondary-text">{formatWeight(weight, weightUnit)}</Typography>
            </FlexWrap>
          )}
          {nextDate && (
            <FlexWrap direction="column" basis="50%" gap={2}>
              <FlexWrap align="center" gap={1}>
                <Typography variant="h5" fontWeight="bold">{translation.nextDate}</Typography>
                <Popover description={translation.nextDateHint} />
              </FlexWrap>
              <Typography variant="label" color="secondary-text">{formatDate(nextDate)}</Typography>
            </FlexWrap>
          )}
        </FlexWrap>
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
