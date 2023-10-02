import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { display, marginBottom } from '@/shared/styles';
import type { Position, Size } from '@/shared/types';

type StyledBoxProps = {
  $display?: boolean;
  $displaySm?: boolean;
  $displayMd?: boolean;
  $displayLg?: boolean;
  $displayXl?: boolean;
  $displayXxl?: boolean;
  $mb?: Size;
  $mbSm?: Size;
  $mbMd?: Size;
  $mbLg?: Size;
  $mbXl?: Size;
  $mbXxl?: Size;
  $position?: Position;
}

const StyledBox = styled.div<StyledBoxProps>`  
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

  ${display};
  ${marginBottom};
`;

type BoxProps = PropsWithChildren & {
  display?: boolean;
  displaySm?: boolean;
  displayMd?: boolean;
  displayLg?: boolean;
  displayXl?: boolean;
  displayXxl?: boolean;
  mb?: Size;
  mbSm?: Size;
  mbMd?: Size;
  mbLg?: Size;
  mbXl?: Size;
  mbXxl?: Size;
  position?: Position;
}

export const Box: FC<BoxProps> = ({
  display,
  displaySm,
  displayMd,
  displayLg,
  displayXl,
  displayXxl,
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
    $display={display}
    $displaySm={displaySm}
    $displayMd={displayMd}
    $displayLg={displayLg}
    $displayXl={displayXl}
    $displayXxl={displayXxl}
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
