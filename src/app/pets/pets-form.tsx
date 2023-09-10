'use client';

import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Col,
  Input,
  Photo,
  Row,
  Textarea,
} from "@/shared/components";
import { useFormRules } from "@/hooks";
import { useDrawer, useLanguage, useSnackbar } from "@/contexts";
import { PetsSelector } from "./pets-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { TABLES, supabaseClient } from "@/supabase";
import { FormButtons } from "@/components";

interface IPetsForm {
  name: string;
  breed: string;
  type: string;
  dateOfBirth: Date | string;
  description?: string;
  photo?: string;
}

interface IPetsFormProps {
  defaultValues?: IPetsForm;
  petId?: number;
  noteId?: number;
}

export const PetsForm: FC<IPetsFormProps> = ({
  defaultValues,
  petId,
  noteId,
}) => {
  const isEditMode = defaultValues && petId && noteId;
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IPetsForm>({
    defaultValues: {
      name: "",
      breed: "",
      type: "",
      dateOfBirth: "",
      description: "",
      photo: undefined,
    },
  });
  const [disabled, setDisabled] = useState(false);
  const [mode, setMode] = useState<'selector' | 'form'>(isEditMode ? 'form' : 'selector');
  const { REQUIRED } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

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

  const handleSetType = (type: ITypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form')
  };

  const handleShowPetsSelector = () => setMode('selector');

  const addNewPet = async (petData: IPetsForm) => {
    const { data: noteData, error: noteError } = await supabaseClient.from(TABLES.NOTES).insert({
      type: petData.type,
      date: new Date(petData.dateOfBirth),
      description: petData.description || null,
      photo: petData.photo || null,
    }).select('id').single();
    const { error: petError } = await supabaseClient.from(TABLES.PETS).insert({
      noteId: noteData?.id,
      name: petData.name,
      breed: petData.breed,
    });

    if (noteError || petError) {
      showSnackbar({
        type: 'error',
        body: translation.notSavedPet,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.savedPet,
      });
    }
  };

  const editExistingPet = async (petData: IPetsForm) => {
    const { error: noteError } = await supabaseClient.from(TABLES.NOTES).update({
      type: petData.type,
      date: new Date(petData.dateOfBirth),
      description: petData.description || null,
      photo: petData.photo || null,
    }).eq('id', noteId);
    const { error: petError } = await supabaseClient.from(TABLES.PETS).update({
      name: petData.name,
      breed: petData.breed,
    }).eq('id', petId);

    if (noteError || petError) {
      showSnackbar({
        type: 'error',
        body: translation.notEditedPet,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.editedPet,
      });
    }
  };

  const onSubmit = async (petData: IPetsForm) => {
    setDisabled(true);
    if (isEditMode) {
      await editExistingPet(petData);
    } else {
      await addNewPet(petData);
    }
    setDisabled(false);
    hideDrawer();
  };

  if (mode === 'selector') {
    return <PetsSelector onSelect={handleSetType} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="name"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.name}
                errorMessage={errors.name?.message}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Col>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="breed"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.breed}
                errorMessage={errors.breed?.message}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Col>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="dateOfBirth"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
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
        </Col>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="description"
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Textarea
                value={value}
                label={translation.description}
                optional
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Col>
        <Col cols={12} mb={5}>
          <Controller
            control={control}
            name="photo"
            render={({
              field: { onChange, value },
            }) => (
              <Photo photo={value} onChangePhoto={onChange} />
            )}
          />
        </Col>
      </Row>
      <FormButtons
        disabledSave={disabled}
        onClickBack={isEditMode ? undefined : handleShowPetsSelector}
      />
    </form>
  );
};
