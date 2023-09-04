import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Position = 'absolute' | 'fixed' | 'relative' | 'sticky';

interface IStyledBoxProps {
  $mb?: number;
  $mbSm?: number;
  $mbMd?: number;
  $mbLg?: number;
  $mbXl?: number;
  $mbXxl?: number;
  $position?: Position;
}

const StyledBox = styled.div<IStyledBoxProps>`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ $mbSm, theme }) => theme.gutters[`size${$mbSm}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ $mbMd, theme }) => theme.gutters[`size${$mbMd}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ $mbLg, theme }) => theme.gutters[`size${$mbLg}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: ${({ $mbXl, theme }) => theme.gutters[`size${$mbXl}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    margin-bottom: ${({ $mbXxl, theme }) => theme.gutters[`size${$mbXxl}`]};
  }
`

interface IBoxProps extends PropsWithChildren {
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mbSm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mbMd?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mbLg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mbXl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mbXxl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  position?: Position;
}

export const Box: FC<IBoxProps> = ({
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
