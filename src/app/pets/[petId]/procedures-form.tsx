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
import { ProceduresSelector } from "./procedures-selector";
import { ITypeSelectorOption } from "@/shared/types";
import { TABLES, supabaseClient } from "@/supabase";
import { FormButtons } from "@/components";

interface IProceduresForm {
  cost: string;
  weight?: string;
  nextDate?: Date | string;
  type: string;
  date: Date | string;
  description?: string;
  photo?: string;
}

interface IProceduresFormProps {
  defaultValues?: IProceduresForm;
  procedureId?: number;
  petId: number;
  noteId?: number;
}

export const ProceduresForm: FC<IProceduresFormProps> = ({
  defaultValues,
  procedureId,
  petId,
  noteId,
}) => {
  const isEditMode = defaultValues && procedureId && noteId;
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
  const [disabled, setDisabled] = useState(false);
  const [mode, setMode] = useState<'selector' | 'form'>(isEditMode ? 'form' : 'selector');
  const { REQUIRED } = useFormRules();
  const { hideDrawer } = useDrawer();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (defaultValues) {
      setValue('cost', defaultValues.cost);
      setValue('weight', defaultValues.weight);
      setValue('nextDate', defaultValues.nextDate);
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

  const handleShowProceduresSelector = () => setMode('selector');

  const addNewProcedure = async (procedureData: IProceduresForm) => {
    const { data: noteDate, error: noteError } = await supabaseClient.from(TABLES.NOTES).insert({
      type: procedureData.type,
      date: new Date(procedureData.date),
      description: procedureData.description,
      photo: procedureData.photo,
    }).select('id').single();
    const { error: procedureError } = await supabaseClient.from(TABLES.PROCEDURES).insert({
      petId,
      noteId: noteDate?.id,
      cost: procedureData.cost,
      weight: procedureData.weight || null,
      nextDate: procedureData.nextDate ? new Date(procedureData.nextDate) : null,
    });

    if (noteError || procedureError) {
      showSnackbar({
        type: 'error',
        body: translation.notSavedProcedure,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.savedProcedure,
      });
    }
  };

  const editExistingProcedure = async (procedureData: IProceduresForm) => {
    const { error: noteError } = await supabaseClient.from(TABLES.NOTES).update({
      type: procedureData.type,
      date: new Date(procedureData.date),
      description: procedureData.description,
      photo: procedureData.photo,
    }).eq('id', noteId);
    const { error: procedureError } = await supabaseClient.from(TABLES.PROCEDURES).update({
      cost: procedureData.cost,
      weight: procedureData.weight || null,
      nextDate: procedureData.nextDate ? new Date(procedureData.nextDate) : null,
    }).eq('id', procedureId);

    if (noteError || procedureError) {
      showSnackbar({
        type: 'error',
        body: translation.notEditedProcedure,
      });
    } else {
      showSnackbar({
        type: 'success',
        body: translation.editedProcedure,
      });
    }
  };

  const onSubmit = async (procedureData: IProceduresForm) => {
    setDisabled(true);
    if (isEditMode) {
      await editExistingProcedure(procedureData);
    } else {
      await addNewProcedure(procedureData);
    }
    setDisabled(false);
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
        onClickBack={isEditMode ? undefined : handleShowProceduresSelector}
      />
    </form>
  );
};
