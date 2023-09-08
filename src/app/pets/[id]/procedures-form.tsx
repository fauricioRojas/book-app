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
import { ProceduresSelector } from "./procedures-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { PROCEDURES_TABLE, NOTES_TABLE, supabaseClient } from "@/supabase";
import { FormButtons } from "@/components";

interface IProceduresForm {
  cost: string;
  weight?: string;
  nextDate?: string;
  type: string;
  date: string;
  description?: string;
  photo?: string;
}

interface IProceduresFormProps {
  petId: number;
}

export const ProceduresForm: FC<IProceduresFormProps> = ({
  petId,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IProceduresForm>({
    defaultValues: {
      cost: "",
      weight: "",
      nextDate: "",
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

  const handleShowProceduresSelector = () => setMode('selector');

  const onSubmit = async (newMaintenanceData: IProceduresForm) => {
    const { data: note } = await supabaseClient.from(NOTES_TABLE).insert({
      type: newMaintenanceData.type,
      date: new Date(newMaintenanceData.date),
      description: newMaintenanceData.description,
      photo: newMaintenanceData.photo,
    }).select('id').single();
    await supabaseClient.from(PROCEDURES_TABLE).insert({
      petId,
      noteId: note?.id,
      cost: newMaintenanceData.cost,
      weight: newMaintenanceData.weight || null,
      nextDate: newMaintenanceData.nextDate ? new Date(newMaintenanceData.nextDate) : null,
    });
    showSnackbar({
      type: 'success',
      body: translation.savedProcedure,
    });
    hideDrawer();
  };

  if (mode === 'selector') {
    return <ProceduresSelector onSelect={handleSetType} />
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
            name="weight"
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                value={value}
                label={translation.weight}
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
            name="nextDate"
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <Input
                type="date"
                value={value}
                label={translation.nextDate}
                optional
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
          <Photo onChangePhoto={handleChangePhoto} />
        </Col>
      </Row>
      <FormButtons onClickBack={handleShowProceduresSelector} />
    </form>
  );
};
