import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import type { Size } from '@/shared/types';

type StyledAbsoluteWrapProps = {
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $gradient: boolean;
  $isNavbarVisible: boolean;
}

const StyledAbsoluteWrap = styled.div<StyledAbsoluteWrapProps>`
  align-items: center;
  background: ${({ $gradient, theme }) => $gradient
    ? `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.secondary400}, ${theme.colors.secondary500})`
    : undefined
  };
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap, theme }) => theme.gutters[`size${$gap}`]};
  justify-content: center;
  left: 0;
  margin: auto;
  padding-left: ${({ theme }) => theme.gutters.size4};
  padding-right: ${({ theme }) => theme.gutters.size4};
  position: absolute;
  right: 0;
  top: ${({ $isNavbarVisible }) => $isNavbarVisible ? '-50px' : 0};
  width: 100%;
  z-index: -1;

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ $gapSm, theme }) => theme.gutters[`size${$gapSm}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ $gapMd, theme }) => theme.gutters[`size${$gapMd}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ $gapLg, theme }) => theme.gutters[`size${$gapLg}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ $gapXl, theme }) => theme.gutters[`size${$gapXl}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    gap: ${({ $gapXxl, theme }) => theme.gutters[`size${$gapXxl}`]};
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
}

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
  >
    {children}
  </StyledAbsoluteWrap>
);
