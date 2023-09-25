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
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
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

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ $mbSm, theme }) => theme.gutters[`size${$mbSm}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ $mbMd, theme }) => theme.gutters[`size${$mbMd}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ $mbLg, theme }) => theme.gutters[`size${$mbLg}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: ${({ $mbXl, theme }) => theme.gutters[`size${$mbXl}`]};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    margin-bottom: ${({ $mbXxl, theme }) => theme.gutters[`size${$mbXxl}`]};
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
