'use client'

import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { useLanguage, useSupabaseAuth } from '@/contexts';
import {
  AbsoluteWrap,
  Button,
  Divider,
  FlexWrap,
  GridWrap,
  Input,
  Link,
  Typography,
  snackbarService,
} from '@/shared/components';
import { useFormRules } from '@/hooks';
import { ROUTES } from '@/shared/constants';

const { showSnackbar } = snackbarService;

const StyledForm = styled.form`
  width: 100%;
`;
const StyledFlexWrap = styled(FlexWrap)`
  width: 100%;

  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    width: 500px;
  }
`;

type SignInForm = {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { EMAIL, MIN_LENGTH, REQUIRED } = useFormRules({ minLength: 6 });
  const { signInWithEmail, signInWithGithub, signInWithFacebook } = useSupabaseAuth();
  const { translation } = useLanguage();

  const onSubmit = async ({ email, password }: SignInForm) => {
    try {
      const error = await signInWithEmail(email, password);
      if (error) {
        showSnackbar({
          type: "error",
          body: translation.signInCredentialsError,
        });
      }
    } catch (error) {
      showSnackbar({
        type: "error",
        body: translation.signInError,
      });
    }
  };

  return (
    <AbsoluteWrap gap={12}>
      <Typography
        variant="h1"
        fontWeight="bold"
      >
        {translation.signIn}
      </Typography>
      <StyledFlexWrap direction="column" align="center" gap={6}>
        <GridWrap gap={3}>
          <Button
            variant="secondary"
            block
            rightIconName="github"
            onClick={signInWithGithub}
          >
            {translation.signInWithGithub}
          </Button>
          <Button
            variant="secondary"
            block
            rightIconName="facebook"
            onClick={signInWithFacebook}
          >
            {translation.signInWithFacebook}
          </Button>
        </GridWrap>
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
              rules={{ ...REQUIRED, ...EMAIL }}
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
              rules={{ ...REQUIRED, ...MIN_LENGTH}}
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
    </AbsoluteWrap>
  );
};
