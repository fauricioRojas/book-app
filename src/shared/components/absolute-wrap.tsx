import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Size } from '@/shared/types';

interface IStyledAbsoluteWrapProps {
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $isNavbarVisible: boolean;
}

const StyledAbsoluteWrap = styled.div<IStyledAbsoluteWrapProps>`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap, theme }) => theme.gutters[`size${$gap}`]};
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: ${({ $isNavbarVisible }) => $isNavbarVisible ? '-50px' : 0};
  width: 90%;

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ $gapSm, theme }) => theme.gutters[`size${$gapSm}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ $gapMd, theme }) => theme.gutters[`size${$gapMd}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ $gapLg, theme }) => theme.gutters[`size${$gapLg}`]};
    width: 100%;
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ $gapXl, theme }) => theme.gutters[`size${$gapXl}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    gap: ${({ $gapXxl, theme }) => theme.gutters[`size${$gapXxl}`]};
  }
`

interface IAbsoluteWrapProps extends PropsWithChildren {
  className?: string;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  isNavbarVisible?: boolean;
}

export const AbsoluteWrap: FC<IAbsoluteWrapProps> = ({
  className,
  gap,
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  gapXxl,
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
    $isNavbarVisible={isNavbarVisible}
  >
    {children}
  </StyledAbsoluteWrap>
);
