'use client';

import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { useLanguage, useSnackbar, useSupabaseAuth } from '@/contexts';
import { useFormRules } from '@/hooks';
import {
  AbsoluteWrap,
  Button,
  FlexWrap,
  GridWrap,
  Input,
  Link,
  Typography,
} from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const StyledForm = styled.form`
  width: 100%;
`;
const StyledFlexWrap = styled(FlexWrap)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.md} {
    width: 500px;
  }
`;

type SignUpForm = {
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { EMAIL, MIN_LENGTH, REQUIRED } = useFormRules({ minLength: 6 });
  const { signUp } = useSupabaseAuth();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const onSubmit = async ({ email, password }: SignUpForm) => {
    try {
      const error = await signUp(email, password);
      if (error) {
        showSnackbar({
          type: 'error',
          message: error,
        });
      } else {
        showSnackbar({
          type: 'success',
          message: translation.signInInstructions,
          durationInSeconds: 8,
        });
      }
    } catch (error) {
      showSnackbar({
        type: 'error',
        message: translation.signUpError,
      });
    }
  };

  return (
    <AbsoluteWrap gap={12}>
      <Typography variant="h1" fontWeight="bold">
        {translation.signUp}
      </Typography>
      <StyledFlexWrap direction="column" align="center" gap={6}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <GridWrap gap={4}>
            <Controller
              control={control}
              name="email"
              rules={{ ...REQUIRED, ...EMAIL }}
              render={({ field: { onChange, onBlur, value } }) => (
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
              rules={{ ...REQUIRED, ...MIN_LENGTH }}
              render={({ field: { onChange, onBlur, value } }) => (
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
    </AbsoluteWrap>
  );
};
