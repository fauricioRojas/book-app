'use client';

import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormButtons } from '@/components';
import { useDrawer, useLanguage, useSnackbar, useSupabase } from '@/contexts';
import { useFormRules } from '@/hooks';
import { GridWrap, Input, Photo, Textarea } from '@/shared/components';
import { TypeSelectorOption } from '@/shared/types';
import { handleOnlyAllowNumbers } from '@/shared/utils';
import { TABLES } from '@/supabase';
import { VehiclesSelector } from './vehicles-selector';

type VehiclesForm = {
  plateNumber: string;
  brand: string;
  model: string;
  type: string;
  dateOfPurchase: Date | string;
  description?: string;
  photo?: string;
};

type VehiclesFormProps = {
  defaultValues?: VehiclesForm;
  vehicleId?: number;
  noteId?: number;
};

export const VehiclesForm: FC<VehiclesFormProps> = ({
  defaultValues,
  vehicleId,
  noteId,
}) => {
  const isUpdateMode = defaultValues && vehicleId && noteId;
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VehiclesForm>({
    defaultValues: {
      plateNumber: '',
      brand: '',
      model: '',
      type: '',
      dateOfPurchase: '',
      description: '',
      photo: undefined,
    },
  });
  const [mode, setMode] = useState<'selector' | 'form'>(
    isUpdateMode ? 'form' : 'selector',
  );
  const { REQUIRED, YEAR } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();
  const { supabaseClient } = useSupabase();

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

  const handleSetType = (type: TypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form');
  };

  const handleShowVehiclesSelector = () => setMode('selector');

  const insertVehicle = async (vehicleDate: VehiclesForm) => {
    const { data: noteData, error: noteError } = await supabaseClient
      .from(TABLES.NOTES)
      .insert({
        type: vehicleDate.type,
        date: new Date(vehicleDate.dateOfPurchase),
        description: vehicleDate.description || null,
        photo: vehicleDate.photo || null,
      })
      .select('id')
      .single();
    const { error: vehicleError } = await supabaseClient
      .from(TABLES.VEHICLES)
      .insert({
        noteId: noteData?.id,
        plateNumber: vehicleDate.plateNumber,
        brand: vehicleDate.brand,
        model: vehicleDate.model,
      });

    if (noteError || vehicleError) {
      showSnackbar({
        type: 'error',
        message: translation.notSavedVehicle,
      });
    } else {
      showSnackbar({
        type: 'success',
        message: translation.savedVehicle,
      });
    }
  };

  const updateVehicle = async (vehicleDate: VehiclesForm) => {
    const { error: noteError } = await supabaseClient
      .from(TABLES.NOTES)
      .update({
        type: vehicleDate.type,
        date: new Date(vehicleDate.dateOfPurchase),
        description: vehicleDate.description || '',
        photo: vehicleDate.photo || '',
      })
      .match({ id: noteId });
    const { error: vehicleError } = await supabaseClient
      .from(TABLES.VEHICLES)
      .update({
        plateNumber: vehicleDate.plateNumber,
        brand: vehicleDate.brand,
        model: vehicleDate.model,
      })
      .match({ id: vehicleId });

    if (noteError || vehicleError) {
      showSnackbar({
        type: 'error',
        message: translation.notEditedVehicle,
      });
    } else {
      showSnackbar({
        type: 'success',
        message: translation.editedVehicle,
      });
    }
  };

  const onSubmit = async (vehicleData: VehiclesForm) => {
    if (isUpdateMode) {
      await updateVehicle(vehicleData);
    } else {
      await insertVehicle(vehicleData);
    }
    hideDrawer();
  };

  if (mode === 'selector') {
    return <VehiclesSelector onSelect={handleSetType} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridWrap gap={4}>
        <Controller
          control={control}
          name="plateNumber"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              label={translation.plateNumber}
              errorMessage={errors.plateNumber?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="brand"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              label={translation.brand}
              errorMessage={errors.brand?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="model"
          rules={{ ...REQUIRED, ...YEAR }}
          render={({ field: { onChange, onBlur, value } }) => (
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
        <Controller
          control={control}
          name="dateOfPurchase"
          rules={REQUIRED}
          render={({ field: { onChange, onBlur, value } }) => (
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
          onClickBack={isUpdateMode ? undefined : handleShowVehiclesSelector}
        />
      </GridWrap>
    </form>
  );
};
