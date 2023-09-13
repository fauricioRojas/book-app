'use client'

import { useState } from 'react'
import styled from 'styled-components';

import { useLanguage, useSnackbar, useSupabaseAuth } from '@/contexts';
import { Button, Col, Divider, FlexWrap, Input, Row, Typography } from '@/shared/components';
import { Controller, useForm } from 'react-hook-form';
import { useFormRules } from '@/hooks';

const StyledLoginForm = styled(FlexWrap)`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.gutters.size12};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
`;

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
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

  const onSubmit = async (loginData: ILoginForm) => {
    try {
      setDisabled(true);
      const error = await signInWithEmail(loginData.email, loginData.password);
      if (error) {
        showSnackbar({
          type: "error",
          body: translation.logInError
        });
      }
      setDisabled(false);
    } catch (error) {
      showSnackbar({
        type: "error",
        body: translation.logInError
      });
    }
  };

  return (
    <StyledLoginForm>
      <Typography variant="h1" fontWeight="bold">BookApp</Typography>
      <FlexWrap direction="column" gap={6}>
        <Button
          variant="secondary"
          onClick={signInWithGithub}
        >
          {translation.loginInWithGithub}
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
                {translation.loginInWithEmail}
              </Button>
            </Col>
          </Row>
        </form>
      </FlexWrap>
    </StyledLoginForm>
  );
};
