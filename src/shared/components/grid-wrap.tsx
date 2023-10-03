import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { gap, marginBottom } from '@/shared/styles';
import type { GridColumn, Size } from '@/shared/types';

const COLS_PER_ROW = 12;

type StyledGridWrapProps = {
  $cols?: GridColumn;
  $sm?: GridColumn;
  $md?: GridColumn;
  $lg?: GridColumn;
  $xl?: GridColumn;
  $xxl?: GridColumn;
  $mb?: Size;
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
};

const StyledGridWrap = styled.div<StyledGridWrapProps>`
  display: grid;
  grid-template-columns: ${({ $cols }) =>
    $cols ? `repeat(${COLS_PER_ROW / $cols}, minmax(0, 1fr))` : undefined};
  width: 100%;
  ${gap};
  ${marginBottom};

  ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: ${({ $sm }) =>
      $sm ? `repeat(${COLS_PER_ROW / $sm}, minmax(0, 1fr))` : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: ${({ $md }) =>
      $md ? `repeat(${COLS_PER_ROW / $md}, minmax(0, 1fr))` : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: ${({ $lg }) =>
      $lg ? `repeat(${COLS_PER_ROW / $lg}, minmax(0, 1fr))` : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: ${({ $xl }) =>
      $xl ? `repeat(${COLS_PER_ROW / $xl}, minmax(0, 1fr))` : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    grid-template-columns: ${({ $xxl }) =>
      $xxl ? `repeat(${COLS_PER_ROW / $xxl}, minmax(0, 1fr))` : undefined};
  }
`;

type GridWrapProps = PropsWithChildren & {
  cols?: GridColumn;
  sm?: GridColumn;
  md?: GridColumn;
  lg?: GridColumn;
  xl?: GridColumn;
  xxl?: GridColumn;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  mb?: Size;
};

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
