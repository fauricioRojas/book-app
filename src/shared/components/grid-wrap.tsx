import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import type { Size } from '@/shared/types';

const COLS_PER_ROW = 12;

type StyledGridWrapProps = {
  $cols?: Size;
  $sm?: Size;
  $md?: Size;
  $lg?: Size;
  $xl?: Size;
  $xxl?: Size;
  $mb?: Size;
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
}

const StyledGridWrap = styled.div<StyledGridWrapProps>`
  display: grid;
  gap: ${({ $gap, theme }) => theme.gutters[`size${$gap}`]};
  grid-template-columns: ${({ $cols }) => $cols ? `repeat(${COLS_PER_ROW / $cols}, minmax(0, 1fr))` : undefined};
  margin-bottom: ${({ theme, $mb }) => theme.gutters[`size${$mb}`]};
  width: 100%;

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ $gapSm, theme }) => theme.gutters[`size${$gapSm}`]};
    grid-template-columns: ${({ $sm }) => $sm ? `repeat(${COLS_PER_ROW / $sm}, minmax(0, 1fr))` : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ $gapMd, theme }) => theme.gutters[`size${$gapMd}`]};
    grid-template-columns: ${({ $md }) => $md ? `repeat(${COLS_PER_ROW / $md}, minmax(0, 1fr))` : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ $gapLg, theme }) => theme.gutters[`size${$gapLg}`]};
    grid-template-columns: ${({ $lg }) => $lg ? `repeat(${COLS_PER_ROW / $lg}, minmax(0, 1fr))` : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ $gapXl, theme }) => theme.gutters[`size${$gapXl}`]};
    grid-template-columns: ${({ $xl }) => $xl ? `repeat(${COLS_PER_ROW / $xl}, minmax(0, 1fr))` : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    gap: ${({ $gapXxl, theme }) => theme.gutters[`size${$gapXxl}`]};
    grid-template-columns: ${({ $xxl }) => $xxl ? `repeat(${COLS_PER_ROW / $xxl}, minmax(0, 1fr))` : undefined};
  }
`

type GridWrapProps = PropsWithChildren & {
  cols?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
  xxl?: Size;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  mb?: Size;
}

export const GridWrap: FC<GridWrapProps> = ({
  cols,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap,
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  gapXxl,
  mb,
  children,
}) => (
  <StyledGridWrap
    $cols={cols}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
    $xxl={xxl}
    $gap={gap}
    $gapSm={gapSm}
    $gapMd={gapMd}
    $gapLg={gapLg}
    $gapXl={gapXl}
    $gapXxl={gapXxl}
    $mb={mb}
  >
    {children}
  </StyledGridWrap>
);
