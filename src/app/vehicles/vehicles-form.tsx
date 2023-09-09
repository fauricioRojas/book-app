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
import { handleOnlyAllowNumbers } from "@/shared/utils";
import { useDrawer, useLanguage, useSnackbar } from "@/contexts";
import { VehiclesSelector } from "./vehicles-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { NOTES_TABLE, VEHICLES_TABLE, supabaseClient } from "@/supabase";
import { FormButtons } from "@/components";

interface IVehiclesForm {
  plateNumber: string;
  brand: string;
  model: string;
  type: string;
  dateOfPurchase: Date | string;
  description?: string;
  photo?: string;
}

interface IVehiclesFormProps {
  defaultValues?: IVehiclesForm;
  vehicleId?: number;
  noteId?: number;
}

export const VehiclesForm: FC<IVehiclesFormProps> = ({
  defaultValues,
  vehicleId,
  noteId,
}) => {
  const isEditMode = defaultValues && vehicleId && noteId;
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
  const [mode, setMode] = useState<'selector' | 'form'>(isEditMode ? 'form' : 'selector');
  const { REQUIRED, YEAR } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (defaultValues) {
      setValue('plateNumber', defaultValues.plateNumber);
      setValue('brand', defaultValues.brand);
      setValue('model', defaultValues.model);
      setValue('type', defaultValues.type);
      setValue('dateOfPurchase', defaultValues.dateOfPurchase);
      setValue('description', defaultValues.description);
      setValue('photo', defaultValues.photo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  const handleSetType = (type: ITypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form')
  };

  const handleShowVehiclesSelector = () => setMode('selector');

  const addNewVehicle = async (vehicleDate: IVehiclesForm) => {
    const { data: note } = await supabaseClient.from(NOTES_TABLE).insert({
      type: vehicleDate.type,
      date: new Date(vehicleDate.dateOfPurchase),
      description: vehicleDate.description,
      photo: vehicleDate.photo,
    }).select('id').single();
    await supabaseClient.from(VEHICLES_TABLE).insert({
      noteId: note?.id,
      plateNumber: vehicleDate.plateNumber,
      brand: vehicleDate.brand,
      model: vehicleDate.model,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedVehicle,
    });
  };

  const editExistingVehicle = async (vehicleDate: IVehiclesForm) => {
    await supabaseClient.from(NOTES_TABLE).update({
      type: vehicleDate.type,
      date: new Date(vehicleDate.dateOfPurchase),
      description: vehicleDate.description,
      photo: vehicleDate.photo,
    }).eq('id', noteId);
    await supabaseClient.from(VEHICLES_TABLE).update({
      plateNumber: vehicleDate.plateNumber,
      brand: vehicleDate.brand,
      model: vehicleDate.model,
    }).eq('id', vehicleId);
    showSnackbar({
      type: 'success',
      body: translation.editedVehicle,
    });
  };

  const onSubmit = async (vehicleData: IVehiclesForm) => {
    if (isEditMode) {
      await editExistingVehicle(vehicleData);
    } else {
      await addNewVehicle(vehicleData);
    }
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
      <FormButtons onClickBack={isEditMode ? undefined : handleShowVehiclesSelector} />
    </form>
  );
};
