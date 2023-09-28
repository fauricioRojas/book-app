import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

import { MessageType } from '@/shared/types';
import { Icon, type IconName, FlexWrap, Typography } from '..';
import { snackbarService } from './snackbar.service';
import type { SnackbarArgs } from './snackbar.types';

type StyledSkeletonProps = {
  $duration: number;
}
type StyledSkeletonProgressProps = StyledSkeletonProps & {
  $color: string;
}

const fadeInAnimation = keyframes`
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const progressAnimation = keyframes`
  to { transform: scaleX(1); }
`;

const StyledSnackbar = styled.div<StyledSkeletonProps>`
  animation: ${fadeInAnimation} ${({ $duration }) => `${$duration}s`} linear forwards;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  bottom: ${({ theme }) => theme.gutters.size15};
  color: ${({ theme }) => theme.colors.primaryText};
  max-width: 320px;
  opacity: 0;
  position: absolute;
  transform: translateY(30px);
  visibility: hidden;
  width: auto;
  padding: ${({ theme }) => theme.gutters.size3};
`;
const StyledSnackbarProgress = styled.div<StyledSkeletonProgressProps>`
  animation: ${progressAnimation} ${({ $duration }) => `${$duration - 1}s`} 0.25s forwards;
  background: linear-gradient(
    to right,
    ${({ $color, theme }) => theme.colors[`${$color}100`]},
    ${({ $color, theme }) => theme.colors[$color]}
  );
  border-radius: inherit;
  bottom: 4px;
  height: 3px;
  left: 8px;
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  width: calc(100% - 16px);
`;

const DEFAULT_DURATION = 5;

type SnackbarState = Required<SnackbarArgs> & {
  isVisible: boolean;
}

const ICON_NAME_MAPPER: Record<MessageType, IconName> = {
  success: 'check',
  error: 'error',
  warning: 'warning',
};

const Snackbar: FC = () => {
  const { colors } = useTheme();
  const [{ isVisible, durationInSeconds, type, body }, setState] = useState<SnackbarState>({
    isVisible: false,
    durationInSeconds: DEFAULT_DURATION,
    type: 'success',
    body: null,
  });

  const hideSnackbar = () => {
    setState((prevState): SnackbarState => ({
      ...prevState,
      isVisible: false,
      body: null,
    }));
  };

  const showSnackbar = (args: SnackbarArgs) => {
    const duration = args.durationInSeconds || DEFAULT_DURATION;

    setState((prevState): SnackbarState => ({
      ...prevState,
      isVisible: true,
      durationInSeconds: duration,
      type: args.type,
      body: args.body,
    }));
    setTimeout(hideSnackbar, duration * 1000);
  };

  useEffect(() => {
    snackbarService.init(showSnackbar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVisible ? (
    <FlexWrap justify="center">
      <StyledSnackbar $duration={durationInSeconds}>
        <FlexWrap align="center" gap={2}>
          <Icon
            name={ICON_NAME_MAPPER[type]}
            color={colors[type]}
            width={22}
            height={22}
          />
          <Typography variant="label">{body}</Typography>
        </FlexWrap>
        <StyledSnackbarProgress
          $color={type}
          $duration={durationInSeconds}
        />
      </StyledSnackbar>
    </FlexWrap>
  ) : null;
};

export { Snackbar, snackbarService };
