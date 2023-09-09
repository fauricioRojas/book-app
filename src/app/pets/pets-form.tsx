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
import { NOTES_TABLE, PETS_TABLE, supabaseClient } from "@/supabase";
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
    const { data: note } = await supabaseClient.from(NOTES_TABLE).insert({
      type: petData.type,
      date: new Date(petData.dateOfBirth),
      description: petData.description,
      photo: petData.photo,
    }).select('id').single();
    await supabaseClient.from(PETS_TABLE).insert({
      noteId: note?.id,
      name: petData.name,
      breed: petData.breed,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedPet,
    });
  };

  const editExistingPet = async (petData: IPetsForm) => {
    await supabaseClient.from(NOTES_TABLE).update({
      type: petData.type,
      date: new Date(petData.dateOfBirth),
      description: petData.description,
      photo: petData.photo,
    }).eq('id', noteId);
    await supabaseClient.from(PETS_TABLE).update({
      name: petData.name,
      breed: petData.breed,
    }).eq('id', petId);
    showSnackbar({
      type: 'success',
      body: translation.editedPet,
    });
  };

  const onSubmit = async (petData: IPetsForm) => {
    if (isEditMode) {
      await editExistingPet(petData);
    } else {
      await addNewPet(petData);
    }
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
      <FormButtons onClickBack={isEditMode ? undefined : handleShowPetsSelector} />
    </form>
  );
};
