'use client';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Button,
  Col,
  FlexWrap,
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

interface IPetsForm {
  name: string;
  breed: string;
  type: string;
  dateOfBirth: string;
  description?: string;
  photo?: string;
}

export const PetsForm = () => {
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
  const [mode, setMode] = useState<'selector' | 'form'>('selector');
  const { REQUIRED } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const handleChangePhoto = (photo?: string) => setValue('photo', photo);

  const handleSetType = (type: ITypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form')
  };

  const handleShowPetsSelector = () => setMode('selector');

  const onSubmit = async (newPetData: IPetsForm) => {
    const { data } = await supabaseClient.from(NOTES_TABLE).insert({
      type: newPetData.type,
      date: new Date(newPetData.dateOfBirth),
      description: newPetData.description,
      photo: newPetData.photo,
    }).select('id').single();
    await supabaseClient.from(PETS_TABLE).insert({
      noteId: data?.id,
      name: newPetData.name,
      breed: newPetData.breed,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedPet,
    });
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
                required
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
                required
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
                required
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
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Col>
        <Col cols={12} mb={5}>
          <Photo onChangePhoto={handleChangePhoto} />
        </Col>
      </Row>
      <FlexWrap justify="center" gap={4}>
        <Button variant="outline-secondary" block onClick={handleShowPetsSelector}>{translation.back}</Button>
        <Button type="submit" block>{translation.save}</Button>
      </FlexWrap>
    </form>
  );
};
