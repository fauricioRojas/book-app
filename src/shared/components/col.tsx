import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import type { Size } from '@/shared/types';

const COL_WIDTH = 100 / 12;

type StyledColProps = {
  $cols?: Size;
  $sm?: Size;
  $md?: Size;
  $lg?: Size;
  $xl?: Size;
  $xxl?: Size;
  $offset?: Size;
  $offsetSm?: Size;
  $offsetMd?: Size;
  $offsetLg?: Size;
  $offsetXl?: Size;
  $offsetXxl?: Size;
  $mb?: Size;
}

const StyledCol = styled.div<StyledColProps>`
  flex: ${({ $cols }) => $cols ? `0 0 ${COL_WIDTH * $cols}%` : '1 0 0%'};
  margin-bottom: ${({ theme, $mb }) => $mb ? theme.gutters[`size${$mb}`] : undefined};
  margin-left: ${({ $offset }) => $offset ? `${COL_WIDTH * $offset}%` : undefined};
  padding-left: ${({ theme }) => theme.gutters.size4};
  padding-right: ${({ theme }) => theme.gutters.size4};
  width: ${({ $cols }) => $cols ? `${COL_WIDTH * $cols}%` : '100%'};
  
  ${({ theme }) => theme.breakpoints.sm} {
    flex: ${({ $sm }) => $sm ? `0 0 ${COL_WIDTH * $sm}%` : undefined};
    margin-left: ${({ $offsetSm }) => $offsetSm ? `${COL_WIDTH * $offsetSm}%` : undefined};
    width: ${({ $sm }) => $sm ? `${COL_WIDTH * $sm}%` : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    flex: ${({ $md }) => $md ? `0 0 ${COL_WIDTH * $md}%` : undefined};
    margin-left: ${({ $offsetMd }) => $offsetMd ? `${COL_WIDTH * $offsetMd}%` : undefined};
    width: ${({ $md }) => $md ? `${COL_WIDTH * $md}%` : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    flex: ${({ $lg }) => $lg ? `0 0 ${COL_WIDTH * $lg}%` : undefined};
    margin-left: ${({ $offsetLg}) => $offsetLg ? `${COL_WIDTH * $offsetLg}%` : undefined};
    width: ${({ $lg }) => $lg ? `${COL_WIDTH * $lg}%` : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    flex: ${({ $xl }) => $xl ? `0 0 ${COL_WIDTH * $xl}%` : undefined};
    margin-left: ${({ $offsetXl }) => $offsetXl ? `${COL_WIDTH * $offsetXl}%` : undefined};
    width: ${({ $xl }) => $xl ? `${COL_WIDTH * $xl}%` : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    flex: ${({ $xxl }) => $xxl ? `0 0 ${COL_WIDTH * $xxl}%` : undefined};
    margin-left: ${({ $offsetXxl }) => $offsetXxl ? `${COL_WIDTH * $offsetXxl}%` : undefined};
    width: ${({ $xxl }) => $xxl ? `${COL_WIDTH * $xxl}%` : undefined};
  }
`

type ColProps = PropsWithChildren & {
  cols?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
  xxl?: Size;
  offset?: Size;
  offsetSm?: Size;
  offsetMd?: Size;
  offsetLg?: Size;
  offsetXl?: Size;
  offsetXxl?: Size;
  mb?: Size;
}

export const Col: FC<ColProps> = ({
  cols,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
  mb,
  children,
}) => (
  <StyledCol
    $cols={cols}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
    $xxl={xxl}
    $offset={offset}
    $offsetSm={offsetSm}
    $offsetMd={offsetMd}
    $offsetLg={offsetLg}
    $offsetXl={offsetXl}
    $offsetXxl={offsetXxl}
    $mb={mb}
  >
    {children}
  </StyledCol>
);
