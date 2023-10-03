import { FC } from 'react';
import styled, { css } from 'styled-components';

import { fadeIn, fadeOut } from '@/shared/styles';

type StyledBackdropProps = {
  $isHiding: boolean;
};

const StyledBackdrop = styled.div<StyledBackdropProps>`
  animation: ${fadeIn} 0.3s;
  background-color: ${({ theme }) => theme.colors.backdrop};
  height: 100%;
  width: 100%;

  ${({ $isHiding }) =>
    $isHiding &&
    css`
      animation: ${fadeOut} 0.3s;
    `};
`;

type BackdropProps = {
  isHiding: boolean;
  onClick?: () => void;
};

export const Backdrop: FC<BackdropProps> = ({ isHiding, onClick }) => (
  <StyledBackdrop $isHiding={isHiding} onClick={onClick} />
);
