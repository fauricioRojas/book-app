'use client';

import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ACTIONS, TPet, TProcedure, SCHEMAS, SELECT, TABLES } from "@/supabase";
import { FlexWrap, Icon, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useDrawer, useLanguage, useModal, useSnackbar, useSupabase } from "@/contexts";
import { ICON_BY_TYPE, ROUTES } from "@/shared/constants";
import { useDidUpdate } from "@/hooks";
import { Actions } from "@/components";
import { ProceduresForm } from "./procedures-form";
import { ProceduresList } from "./procedures-list";
import { PetsForm } from "../pets-form";

const abortController = new AbortController();

type PetProps = {
  serverPet: TPet;
}

export const Pet: FC<PetProps> = ({ serverPet }) => {
  const [{
    id,
    name,
    breed,
    notes,
    procedures,
  }, setPet] = useState<TPet>(serverPet);
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();
  const { showDrawer } = useDrawer();
  const { showConfirmationModal } = useModal();
  const { showSnackbar } = useSnackbar();
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setPet(serverPet), [serverPet]);

  useEffect(() => {
    const petChannel = supabaseClient
      .channel('pet')
      .on('postgres_changes', {
        event: ACTIONS.UPDATE,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.PETS,
      }, async (payload: any) => {
        const updatedPet = await findPetById(payload.new.id);
        if (updatedPet) {
          setPet((prevPet: TPet) => ({ ...prevPet, ...updatedPet }));
        }
      })
      .subscribe();
    const procedureChannel = supabaseClient
      .channel('procedure')
      .on('postgres_changes', {
        event: ACTIONS.INSERT,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.PROCEDURES,
      }, async (payload: any) => {
        const newlyAddedProcedure = await findProcedureById(payload.new.id);
        if (newlyAddedProcedure) {
          setPet((prevPet: TPet) => ({
            ...prevPet,
            procedures: prevPet.procedures.concat(newlyAddedProcedure),
          }));
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(petChannel);
      supabaseClient.removeChannel(procedureChannel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPetById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.PETS)
      .select<string, TPet>(SELECT.FULL_PET)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const findProcedureById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.PROCEDURES)
      .select<string, TProcedure>(SELECT.FULL_PROCEDURE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  const handleShowProceduresForm = () => {
    showDrawer({
      title: translation.newProcedure,
      body: <ProceduresForm petId={id} />,
    });
  };

  const handleShowPetsFormInEditMode = () => {
    const defaultValues = {
      name,
      breed,
      type: notes.type,
      dateOfBirth: notes.date,
      description: notes.description || '',
      photo: notes.photo,
    };
    showDrawer({
      title: translation.editPet,
      body: <PetsForm defaultValues={defaultValues} petId={id} noteId={notes.id} />,
    });
  };

  const handleDelete = async () => {
    const [
      { error: proceduresNotesError },
      { error: noteError },
      { error: proceduresError },
      { error: petError },
    ] = await Promise.all([
      supabaseClient.from(TABLES.NOTES).delete().in('id', procedures.map(({ notes: { id } }) => id)),
      supabaseClient.from(TABLES.NOTES).delete().eq('id', notes.id),
      supabaseClient.from(TABLES.PROCEDURES).delete().eq('petId', id),
      supabaseClient.from(TABLES.PETS).delete().eq('id', id),
    ]);

    if (proceduresNotesError || proceduresError || noteError || petError) {
      showSnackbar({
        type: 'error',
        body: translation.notDeletedPet,
      });
    } else {
      router.push(ROUTES.PETS);
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
        <Actions
          onDelete={handleShowDeleteConfirmation}
          onEdit={handleShowPetsFormInEditMode}
          onAdd={handleShowProceduresForm}
        />
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.breed}</Typography>
          <Typography variant="label" color="secondary-text">{breed}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.dateOfBirth}</Typography>
          <Typography variant="label" color="secondary-text">{formatDate(notes.date)}</Typography>
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
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.procedures}</Typography>
          <ProceduresList procedures={procedures} />
        </FlexWrap>
      </FlexWrap>
    </>
  );
};
