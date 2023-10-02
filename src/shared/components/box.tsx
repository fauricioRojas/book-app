import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import type { Position, Size } from '@/shared/types';

type StyledBoxProps = {
  $mb?: Size;
  $mbSm?: Size;
  $mbMd?: Size;
  $mbLg?: Size;
  $mbXl?: Size;
  $mbXxl?: Size;
  $position?: Position;
}

const StyledBox = styled.div<StyledBoxProps>`
  margin-bottom: ${({ $mb, theme }) => $mb ? theme.gutters[`size${$mb}`] : undefined};
  ${({ $position }) => $position === 'absolute' && css`
    position: absolute;
  `};
  ${({ $position }) => $position === 'fixed' && css`
    position: fixed;
  `};
  ${({ $position }) => $position === 'relative' && css`
    position: relative;
  `};
  ${({ $position }) => $position === 'sticky' && css`
    position: sticky;
  `};

  ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: ${({ $mbSm, theme }) => $mbSm ? theme.gutters[`size${$mbSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: ${({ $mbMd, theme }) => $mbMd ? theme.gutters[`size${$mbMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin-bottom: ${({ $mbLg, theme }) =>$mbLg ?  theme.gutters[`size${$mbLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    margin-bottom: ${({ $mbXl, theme }) => $mbXl ? theme.gutters[`size${$mbXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    margin-bottom: ${({ $mbXxl, theme }) => $mbXxl ? theme.gutters[`size${$mbXxl}`] : undefined};
  }
`

type BoxProps = PropsWithChildren & {
  mb?: Size;
  mbSm?: Size;
  mbMd?: Size;
  mbLg?: Size;
  mbXl?: Size;
  mbXxl?: Size;
  position?: Position;
}

export const Box: FC<BoxProps> = ({
  mb,
  mbSm,
  mbMd,
  mbLg,
  mbXl,
  mbXxl,
  position,
  children,
}) => (
  <StyledBox
    $mb={mb}
    $mbSm={mbSm}
    $mbMd={mbMd}
    $mbLg={mbLg}
    $mbXl={mbXl}
    $mbXxl={mbXxl}
    $position={position}
  >
    {children}
  </StyledBox>
);
