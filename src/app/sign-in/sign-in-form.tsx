'use client'

import { useState } from 'react'
import styled from 'styled-components';

import { useLanguage, useSnackbar, useSupabaseAuth } from '@/contexts';
import { Button, Col, Divider, FlexWrap, Input, Row, Typography } from '@/shared/components';
import { Controller, useForm } from 'react-hook-form';
import { useFormRules } from '@/hooks';

const StyledSignInForm = styled(FlexWrap)`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.gutters.size12};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
`;

interface ISignInForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [disabled, setDisabled] = useState(false);
  const { REQUIRED } = useFormRules();
  const { signInWithEmail, signInWithGithub } = useSupabaseAuth();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const onSubmit = async ({ email, password }: ISignInForm) => {
    try {
      setDisabled(true);
      const error = await signInWithEmail(email, password);
      if (error) {
        showSnackbar({
          type: "error",
          body: translation.signInError
        });
      }
      setDisabled(false);
    } catch (error) {
      showSnackbar({
        type: "error",
        body: translation.signInError
      });
    }
  };

  return (
    <StyledSignInForm>
      <Typography variant="h1" fontWeight="bold">BookApp</Typography>
      <FlexWrap direction="column" gap={6}>
        <Button
          variant="secondary"
          onClick={signInWithGithub}
        >
          {translation.signInWithGithub}
        </Button>
        <FlexWrap align="center" gap={3}>
          <Divider />
          <Typography variant="h6">{translation.or}</Typography>
          <Divider />
        </FlexWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col cols={12} mb={4}>
              <Controller
                control={control}
                name="email"
                rules={REQUIRED}
                render={({
                  field: { onChange, onBlur, value },
                }) => (
                  <Input
                    value={value}
                    label={translation.email}
                    errorMessage={errors.email?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Col>
            <Col cols={12} mb={4}>
              <Controller
                control={control}
                name="password"
                rules={REQUIRED}
                render={({
                  field: { onChange, onBlur, value },
                }) => (
                  <Input
                    value={value}
                    type="password"
                    label={translation.password}
                    errorMessage={errors.password?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Col>
            <Col cols={12}>
              <Button
                type="submit"
                block
                disabled={disabled}
              >
                {translation.signInWithEmail}
              </Button>
            </Col>
          </Row>
        </form>
      </FlexWrap>
    </StyledSignInForm>
  );
};
