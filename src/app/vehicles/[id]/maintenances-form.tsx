'use client';

import { FC, useState } from "react";
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
import { MaintenancesSelector } from "./maintenances-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { MAINTENANCES_TABLE, NOTES_TABLE, supabaseClient } from "@/supabase";
import { FormButtons } from "@/components";

interface IMaintenancesForm {
  cost: string;
  kilometers?: string;
  type: string;
  date: string;
  description?: string;
  photo?: string;
}

interface IMaintenancesFormProps {
  vehicleId: number;
}

export const MaintenancesForm: FC<IMaintenancesFormProps> = ({
  vehicleId,
}) => {
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

  const handleShowMaintenancesSelector = () => setMode('selector');

  const onSubmit = async (newMaintenanceData: IMaintenancesForm) => {
    const { data: note } = await supabaseClient.from(NOTES_TABLE).insert({
      type: newMaintenanceData.type,
      date: new Date(newMaintenanceData.date),
      description: newMaintenanceData.description,
      photo: newMaintenanceData.photo,
    }).select('id').single();
    await supabaseClient.from(MAINTENANCES_TABLE).insert({
      vehicleId,
      noteId: note?.id,
      cost: newMaintenanceData.cost,
      kilometers: newMaintenanceData.kilometers || null,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedMaintenance,
    });
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
            name="kilometers"
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.kilometers}
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
      <FormButtons onClickBack={handleShowMaintenancesSelector} />
    </form>
  );
};
