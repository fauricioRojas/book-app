import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { gap } from '@/shared/styles';
import type { Size, ZIndex } from '@/shared/types';

type StyledAbsoluteWrapProps = {
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $gradient: boolean;
  $isNavbarVisible: boolean;
  $zIndex?: ZIndex;
};

const StyledAbsoluteWrap = styled.div<StyledAbsoluteWrapProps>`
  align-items: center;
  background: ${({ $gradient, theme }) =>
    $gradient
      ? `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.secondary400}, ${theme.colors.secondary500})`
      : undefined};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: auto;
  padding-left: ${({ theme }) => theme.gutters.size4};
  padding-right: ${({ theme }) => theme.gutters.size4};
  position: absolute;
  right: 0;
  top: ${({ $isNavbarVisible }) => ($isNavbarVisible ? '-50px' : 0)};
  width: 100%;
  z-index: ${({ $zIndex, theme }) =>
    $zIndex ? theme.zIndices[$zIndex] : undefined};
  ${gap};

  ${({ theme }) => theme.breakpoints.lg} {
    top: ${({ $isNavbarVisible }) => ($isNavbarVisible ? '60px' : 0)};
  }
`;

type AbsoluteWrapProps = PropsWithChildren & {
  className?: string;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  gradient?: boolean;
  isNavbarVisible?: boolean;
  zIndex?: ZIndex;
};

export const AbsoluteWrap: FC<AbsoluteWrapProps> = ({
  className,
  gap,
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  gapXxl,
  gradient = false,
  isNavbarVisible = false,
  zIndex,
  children,
}) => (
  <StyledAbsoluteWrap
    className={className}
    $gap={gap}
    $gapSm={gapSm}
    $gapMd={gapMd}
    $gapLg={gapLg}
    $gapXl={gapXl}
    $gapXxl={gapXxl}
    $gradient={gradient}
    $isNavbarVisible={isNavbarVisible}
    $zIndex={zIndex}
  >
    {children}
  </StyledAbsoluteWrap>
);
