import { FC, ReactNode } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

import { MessageType } from '@/shared/types';
import { Icon, type IconName, FlexWrap, Typography } from '.';

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
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
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
    ${({ theme }) => theme.colors.secondary},
    ${({ $color }) => $color}
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

type SnackbarProps = {
  body: ReactNode;
  type: MessageType;
  durationInSeconds: number;
}

const ICON_NAME_MAPPER: Record<MessageType, IconName> = {
  success: 'check',
  error: 'error',
  warning: 'warning',
};

export const Snackbar: FC<SnackbarProps> = ({ body, type, durationInSeconds }) => {
  const { colors } = useTheme();
  const color = colors[type];

  return (
    <FlexWrap justify="center">
      <StyledSnackbar $duration={durationInSeconds}>
        <FlexWrap align="center" gap={2}>
          <Icon
            name={ICON_NAME_MAPPER[type]}
            color={color}
            width={22}
            height={22}
          />
          <Typography variant="label">{body}</Typography>
        </FlexWrap>
        <StyledSnackbarProgress
          $color={color}
          $duration={durationInSeconds}
        />
      </StyledSnackbar>
    </FlexWrap>
  );
};
