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

const StyledSignInForm = styled(FlexWrap)`
  width: 100%;
  /* height: calc(100vh - 100px); */
`;
const StyledForm = styled.form`
  width: 100%;
`;
const StyledFlexWrap = styled(FlexWrap)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 500px;
  }
`;

interface ISignInForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { REQUIRED } = useFormRules();
  const { signInWithEmail, signInWithGithub } = useSupabaseAuth();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const onSubmit = async ({ email, password }: ISignInForm) => {
    try {
      const error = await signInWithEmail(email, password);
      if (error) {
        showSnackbar({
          type: "error",
          body: translation.signInError
        });
      }
    } catch (error) {
      showSnackbar({
        type: "error",
        body: translation.signInError
      });
    }
  };

  return (
    <StyledSignInForm
      direction="column"
      align="center"
      justify="center"
      gap={12}
    >
      <Typography variant="h1" fontWeight="bold">{translation.signIn}</Typography>
      <StyledFlexWrap direction="column" align="center" gap={6}>
        <Button
          variant="secondary"
          block
          rightIconName="github"
          onClick={signInWithGithub}
        >
          {translation.signInWithGithub}
        </Button>
        <FlexWrap align="center" justify="center" gap={3}>
          <Divider />
          <Typography variant="h6">{translation.or}</Typography>
          <Divider />
        </FlexWrap>
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
              rightIconName="email"
              block
              disabled={isSubmitting}
            >
              {translation.signInWithEmail}
            </Button>
          </GridWrap>
        </StyledForm>
        <Link href={ROUTES.SIGN_UP}>{translation.dontHaveAnAccount}</Link>
      </StyledFlexWrap>
    </StyledSignInForm>
  );
};
