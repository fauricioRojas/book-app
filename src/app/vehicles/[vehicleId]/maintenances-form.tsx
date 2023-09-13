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
import { useDrawer, useLanguage, useSnackbar, useSupabase } from "@/contexts";
import { MaintenancesSelector } from "./maintenances-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { TABLES } from "@/supabase";
import { FormButtons } from "@/components";

interface IMaintenancesForm {
  cost: string;
  kilometers?: string;
  type: string;
  date: Date |string;
  description?: string;
  photo?: string;
}

interface IMaintenancesFormProps {
  defaultValues?: IMaintenancesForm;
  maintenanceId?: number;
  vehicleId: number;
  noteId?: number;
}

export const MaintenancesForm: FC<IMaintenancesFormProps> = ({
  defaultValues,
  maintenanceId,
  vehicleId,
  noteId,
}) => {
  const isUpdateMode = defaultValues && maintenanceId && noteId;
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IMaintenancesForm>({
    defaultValues: {
      cost: "",
      kilometers: "",
      type: "",
      date: "",
      description: "",
      photo: undefined,
    },
  });
  const [disabled, setDisabled] = useState(false);
  const [mode, setMode] = useState<'selector' | 'form'>(isUpdateMode ? 'form' : 'selector');
  const { REQUIRED } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();
  const { supabaseClient } = useSupabase();

  useEffect(() => {
    if (defaultValues) {
      setValue('cost', defaultValues.cost);
      setValue('kilometers', defaultValues.kilometers);
      setValue('type', defaultValues.type);
      setValue('date', defaultValues.date);
      setValue('description', defaultValues.description);
      setValue('photo', defaultValues.photo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  const handleSetType = (type: ITypeSelectorOption) => {
    setValue('type', type.value);
    setMode('form')
  };

  const handleShowMaintenancesSelector = () => setMode('selector');

  const insertMaintenance = async (maintenanceData: IMaintenancesForm) => {
    const { data: noteData, error: noteError } = await supabaseClient.from(TABLES.NOTES).insert({
      type: maintenanceData.type,
      date: new Date(maintenanceData.date),
      description: maintenanceData.description,
      photo: maintenanceData.photo,
    }).select('id').single();
    const { error: maintenanceError } = await supabaseClient.from(TABLES.MAINTENANCES).insert({
      vehicleId,
      noteId: noteData?.id,
      cost: maintenanceData.cost,
      kilometers: maintenanceData.kilometers || null,
    });

    if (noteError || maintenanceError) {
      showSnackbar({
        type: 'error',
        body: translation.notSavedMaintenance,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.savedMaintenance,
      });
    }
  };

  const updateMaintenance = async (maintenanceData: IMaintenancesForm) => {
    const { error: noteError } = await supabaseClient.from(TABLES.NOTES).update({
      type: maintenanceData.type,
      date: new Date(maintenanceData.date),
      description: maintenanceData.description,
      photo: maintenanceData.photo,
    }).match({ id: noteId });
    const { error: maintenanceError } = await supabaseClient.from(TABLES.MAINTENANCES).update({
      cost: maintenanceData.cost,
      kilometers: maintenanceData.kilometers || null,
    }).match({ id: maintenanceId });

    if (noteError || maintenanceError) {
      showSnackbar({
        type: 'error',
        body: translation.notSavedMaintenance,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.savedMaintenance,
      });
    }
  };

  const onSubmit = async (maintenanceData: IMaintenancesForm) => {
    setDisabled(true);
    if (isUpdateMode) {
      await updateMaintenance(maintenanceData);
    } else {
      await insertMaintenance(maintenanceData);
    }
    setDisabled(false);
    hideDrawer();
  };

  if (mode === 'selector') {
    return <MaintenancesSelector onSelect={handleSetType} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols={12} mb={4}>
          <Controller
            control={control}
            name="cost"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.cost}
                errorMessage={errors.cost?.message}
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
            name="kilometers"
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.kilometers}
                inputMode="numeric"
                optional
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
            name="date"
            rules={REQUIRED}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                type="date"
                value={value}
                label={translation.date}
                errorMessage={errors.date?.message}
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
        onClickBack={isUpdateMode ? undefined : handleShowMaintenancesSelector}
      />
    </form>
  );
};
