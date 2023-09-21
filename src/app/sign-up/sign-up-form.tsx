'use client'

import styled from 'styled-components';

import { useLanguage, useSnackbar, useSupabaseAuth } from '@/contexts';
import {
  Button,
  Divider,
  FlexWrap,
  GridWrap,
  Input,
  Link,
  Typography
} from '@/shared/components';
import { Controller, useForm } from 'react-hook-form';
import { useFormRules } from '@/hooks';
import { ROUTES } from '@/shared/constants';

const StyledSignUpForm = styled(FlexWrap)`
  width: 100%;
  /* height: calc(100vh - 100px); */
`;
const StyledForm = styled.form`
  width: 100%;
`;
const StyledFlexWrap = styled(FlexWrap)`
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    width: 500px;
  }
`;

interface ISignUpForm {
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { REQUIRED } = useFormRules();
  const { signUp } = useSupabaseAuth();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const onSubmit = async ({ email, password }: ISignUpForm) => {
    try {
      const error = await signUp(email, password);
      if (error) {
        showSnackbar({
          type: "error",
          body: error,
        });
      } else {
        showSnackbar({
          type: "success",
          body: "Please check you email for further instructions",
          durationInSeconds: 8,
        });
      }
    } catch (error) {
      showSnackbar({
        type: "error",
        body: translation.signUpError,
      });
    }
  };

  return (
    <StyledSignUpForm
      direction="column"
      align="center"
      justify="center"
      gap={12}
    >
      <Typography variant="h1" fontWeight="bold">{translation.signUp}</Typography>
      <StyledFlexWrap direction="column" align="center" gap={6}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <GridWrap gap={4}>
            <Controller
              control={control}
              name="email"
              rules={REQUIRED}
              render={({
                field: { onChange, onBlur, value },
              }) => (
                <Input
                  value={value}
                  inputMode="email"
                  label={translation.email}
                  errorMessage={errors.email?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
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
            <Button
              variant="primary"
              type="submit"
              block
              disabled={isSubmitting}
            >
              {translation.signUp}
            </Button>
          </GridWrap>
        </StyledForm>
        <Link href={ROUTES.SIGN_IN}>{translation.alreadyHaveAnAccount}</Link>
      </StyledFlexWrap>
    </StyledSignUpForm>
  );
};
