'use client';

import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormButtons } from '@/components';
import { useDrawer, useLanguage, useSnackbar, useSupabase } from '@/contexts';
import { useFormRules } from '@/hooks';
import { GridWrap, Input, Photo, Textarea } from '@/shared/components';
import { TypeSelectorOption } from '@/shared/types';
import { TABLES } from '@/supabase';
import { PetsSelector } from './pets-selector';

type PetsForm = {
  name: string;
  breed: string;
  type: string;
  dateOfBirth: Date | string;
  description?: string;
  photo?: string;
};

type PetsFormProps = {
  defaultValues?: PetsForm;
  petId?: number;
  noteId?: number;
};

export const PetsForm: FC<PetsFormProps> = ({
  defaultValues,
  petId,
  noteId,
}) => {
  const isUpdateMode = defaultValues && petId && noteId;
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PetsForm>({
    defaultValues: {
      name: '',
      breed: '',
      type: '',
      dateOfBirth: '',
      description: '',
      photo: undefined,
    },
  });
  const [mode, setMode] = useState<'selector' | 'form'>(
    isUpdateMode ? 'form' : 'selector',
  );
  const { REQUIRED } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();
  const { supabaseClient } = useSupabase();

  useEffect(() => {
    if (defaultValues) {
      setValue('name', defaultValues.name);
      setValue('breed', defaultValues.breed);
      setValue('type', defaultValues.type);
      setValue('dateOfBirth', defaultValues.dateOfBirth);
      setValue('description', defaultValues.description);
      setValue('photo', defaultValues.photo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  const handleSetType = (type: TypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form');
  };

  const handleShowPetsSelector = () => setMode('selector');

  const insertPet = async (petData: PetsForm) => {
    const { data: noteData, error: noteError } = await supabaseClient
      .from(TABLES.NOTES)
      .insert({
        type: petData.type,
        date: new Date(petData.dateOfBirth),
        description: petData.description || null,
        photo: petData.photo || null,
      })
      .select('id')
      .single();
    const { error: petError } = await supabaseClient.from(TABLES.PETS).insert({
      noteId: noteData?.id,
      name: petData.name,
      breed: petData.breed,
    });

    if (noteError || petError) {
      showSnackbar({
        type: 'error',
        message: translation.notSavedPet,
      });
    } else {
      showSnackbar({
        type: 'success',
        message: translation.savedPet,
      });
    }
  };

  const updatePet = async (petData: PetsForm) => {
    const { error: noteError } = await supabaseClient
      .from(TABLES.NOTES)
      .update({
        type: petData.type,
        date: new Date(petData.dateOfBirth),
        description: petData.description || null,
        photo: petData.photo || null,
      })
      .match({ id: noteId });
    const { error: petError } = await supabaseClient
      .from(TABLES.PETS)
      .update({
        name: petData.name,
        breed: petData.breed,
      })
      .match({ id: petId });

    if (noteError || petError) {
      showSnackbar({
        type: 'error',
        message: translation.notEditedPet,
      });
    } else {
      showSnackbar({
        type: 'success',
        message: translation.editedPet,
      });
    }
  };

  const onSubmit = async (petData: PetsForm) => {
    if (isUpdateMode) {
      await updatePet(petData);
    } else {
      await insertPet(petData);
    }
    hideDrawer();
  };

  if (mode === 'selector') {
    return <PetsSelector onSelect={handleSetType} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridWrap gap={4}>
        <Controller
          control={control}
          name="name"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              label={translation.name}
              errorMessage={errors.name?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="breed"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              label={translation.breed}
              errorMessage={errors.breed?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="dateOfBirth"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="date"
              value={value}
              label={translation.dateOfBirth}
              errorMessage={errors.dateOfBirth?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <Textarea
              value={value}
              label={translation.description}
              optional
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="photo"
          render={({ field: { onChange, value } }) => (
            <Photo photo={value} onChangePhoto={onChange} />
          )}
        />
        <FormButtons
          disabledSave={isSubmitting}
          onClickBack={isUpdateMode ? undefined : handleShowPetsSelector}
        />
      </GridWrap>
    </form>
  );
};
