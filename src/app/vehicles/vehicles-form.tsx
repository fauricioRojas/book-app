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
import { handleOnlyAllowNumbers } from "@/shared/utils";
import { useDrawer, useLanguage, useSnackbar } from "@/contexts";
import { VehiclesSelector } from "./vehicles-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { NOTES_TABLE, VEHICLES_TABLE, supabaseClient } from "@/supabase";

interface IVehiclesForm {
  plateNumber: string;
  brand: string;
  model: string;
  type: string;
  dateOfPurchase: string;
  description?: string;
  photo?: string;
}

export const VehiclesForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehiclesForm>({
    defaultValues: {
      plateNumber: "",
      brand: "",
      model: "",
      type: "",
      dateOfPurchase: "",
      description: "",
      photo: undefined,
    },
  });
  const [mode, setMode] = useState<'selector' | 'form'>('selector');
  const { REQUIRED, YEAR } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const handleChangePhoto = (photo?: string) => setValue('photo', photo);

  const handleSetType = (type: ITypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form')
  };

  const handleShowVehiclesSelector = () => setMode('selector');

  const onSubmit = async (newVehicleData: IVehiclesForm) => {
    const { data } = await supabaseClient.from(NOTES_TABLE).insert({
      type: newVehicleData.type,
      date: new Date(newVehicleData.dateOfPurchase),
      description: newVehicleData.description,
      photo: newVehicleData.photo,
    }).select('id');
    await supabaseClient.from(VEHICLES_TABLE).insert({
      noteId: data ? data[0].id : null,
      plateNumber: newVehicleData.plateNumber,
      brand: newVehicleData.brand,
      model: newVehicleData.model,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedVehicle,
    });
    hideDrawer();
  };

  if (mode === 'selector') {
    return <VehiclesSelector onSelect={handleSetType} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="plateNumber"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.plateNumber}
                errorMessage={errors.plateNumber?.message}
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
            name="brand"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.brand}
                errorMessage={errors.brand?.message}
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
            name="model"
            rules={{ ...REQUIRED, ...YEAR }}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.model}
                errorMessage={errors.model?.message}
                required
                inputMode="numeric"
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={handleOnlyAllowNumbers}
              />
            )}
          />
        </Col>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="dateOfPurchase"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                type="date"
                value={value}
                label={translation.dateOfPurchase}
                errorMessage={errors.dateOfPurchase?.message}
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
      <Button variant="outline-secondary" block onClick={handleShowVehiclesSelector}>{translation.back}</Button>
        <Button type="submit" block>{translation.save}</Button>
      </FlexWrap>
    </form>
  );
};
