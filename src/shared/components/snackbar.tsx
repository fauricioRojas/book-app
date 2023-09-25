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
  95% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const progressAnimation = keyframes`
  to { transform: scaleX(1); }
`;

const StyledSnackbar = styled.div<StyledSkeletonProps>`
  position: absolute;
  bottom: ${({ theme }) => theme.gutters.size8};
  align-items: center;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.primaryText};
  max-width: 320px;
  width: auto;
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation-duration: ${({ $duration }) => `${$duration}s`};
  animation-name: ${fadeInAnimation};
  animation-timing-function: linear;
`;
const StyledSnackbarBody = styled.div`
  padding: ${({ theme }) => theme.gutters.size3};
`;
const StyledSnackbarProgress = styled.div<StyledSkeletonProgressProps>`
  position: absolute;
  left: 8px;
  bottom: 4px;
  width: calc(100% - 16px);
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary},
    ${({ $color }) => $color}
  );
  border-radius: inherit;
  animation-duration: ${({ $duration }) => `${$duration}s`};
  animation-delay: 0.3s;
  animation-name: ${progressAnimation};
  animation-timing-function: linear;
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
        <StyledSnackbarBody>
          <FlexWrap align="center" gap={2}>
            <Icon
              name={ICON_NAME_MAPPER[type]}
              color={color}
              width={22}
              height={22}
            />
            <Typography variant="label">{body}</Typography>
          </FlexWrap>
        </StyledSnackbarBody>
        <StyledSnackbarProgress
          $color={color}
          $duration={durationInSeconds}
        />
      </StyledSnackbar>
    </FlexWrap>
  );
};
