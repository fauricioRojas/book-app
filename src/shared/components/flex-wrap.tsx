import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { gap, marginBottom } from '@/shared/styles';
import type { Position, Size } from '@/shared/types';

type Align = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type StyledFlexWrapProps = {
  $align?: Align;
  $alignSm?: Align;
  $alignMd?: Align;
  $alignLg?: Align;
  $alignXl?: Align;
  $alignXxl?: Align;
  $basis?: number | string;
  $basisSm?: number | string;
  $basisMd?: number | string;
  $basisLg?: number | string;
  $basisXl?: number | string;
  $basisXxl?: number | string;
  $direction?: Direction;
  $directionSm?: Direction;
  $directionMd?: Direction;
  $directionLg?: Direction;
  $directionXl?: Direction;
  $directionXxl?: Direction;
  $fullHeight?: boolean;
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $grow?: number;
  $growSm?: number;
  $growMd?: number;
  $growLg?: number;
  $growXl?: number;
  $growXxl?: number;
  $justify?: Justify;
  $justifySm?: Justify;
  $justifyMd?: Justify;
  $justifyLg?: Justify;
  $justifyXl?: Justify;
  $justifyXxl?: Justify;
  $mb?: Size;
  $position?: Position;
  $wrap?: Wrap;
  $wrapSm?: Wrap;
  $wrapMd?: Wrap;
  $wrapLg?: Wrap;
  $wrapXl?: Wrap;
  $wrapXxl?: Wrap;
};

const StyledFlexWrap = styled.div<StyledFlexWrapProps>`
  align-items: ${({ $align }) => $align};
  display: flex;
  flex-basis: ${({ $basis }) => $basis};
  flex-direction: ${({ $direction }) => $direction};
  flex-grow: ${({ $grow }) => $grow};
  flex-wrap: ${({ $wrap }) => $wrap};
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : undefined)};
  justify-content: ${({ $justify }) => $justify};
  ${gap};
  ${marginBottom};

  ${({ $position }) =>
    $position === 'absolute' &&
    css`
      position: absolute;
    `};
  ${({ $position }) =>
    $position === 'fixed' &&
    css`
      position: fixed;
    `};
  ${({ $position }) =>
    $position === 'relative' &&
    css`
      position: relative;
    `};
  ${({ $position }) =>
    $position === 'sticky' &&
    css`
      position: sticky;
    `};

  ${({ theme }) => theme.breakpoints.sm} {
    align-items: ${({ $alignSm }) => $alignSm};
    flex-basis: ${({ $basisSm }) => $basisSm};
    flex-direction: ${({ $directionSm }) => $directionSm};
    flex-grow: ${({ $growSm }) => $growSm};
    flex-wrap: ${({ $wrapSm }) => $wrapSm};
    justify-content: ${({ $justifySm }) => $justifySm};
  }
  ${({ theme }) => theme.breakpoints.md} {
    align-items: ${({ $alignMd }) => $alignMd};
    flex-basis: ${({ $basisMd }) => $basisMd};
    flex-direction: ${({ $directionMd }) => $directionMd};
    flex-grow: ${({ $growMd }) => $growMd};
    flex-wrap: ${({ $wrapMd }) => $wrapMd};
    justify-content: ${({ $justifyMd }) => $justifyMd};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    align-items: ${({ $alignLg }) => $alignLg};
    flex-basis: ${({ $basisLg }) => $basisLg};
    flex-direction: ${({ $directionLg }) => $directionLg};
    flex-grow: ${({ $growLg }) => $growLg};
    flex-wrap: ${({ $wrapLg }) => $wrapLg};
    justify-content: ${({ $justifyLg }) => $justifyLg};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    align-items: ${({ $alignXl }) => $alignXl};
    flex-basis: ${({ $basisXl }) => $basisXl};
    flex-direction: ${({ $directionXl }) => $directionXl};
    flex-grow: ${({ $growXl }) => $growXl};
    flex-wrap: ${({ $wrapXl }) => $wrapXl};
    justify-content: ${({ $justifyXl }) => $justifyXl};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    align-items: ${({ $alignXxl }) => $alignXxl};
    flex-basis: ${({ $basisXxl }) => $basisXxl};
    flex-direction: ${({ $directionXxl }) => $directionXxl};
    flex-grow: ${({ $growXxl }) => $growXxl};
    flex-wrap: ${({ $wrapXxl }) => $wrapXxl};
    justify-content: ${({ $justifyXxl }) => $justifyXxl};
  }
`;

type FlexWrapProps = PropsWithChildren & {
  align?: Align;
  alignSm?: Align;
  alignMd?: Align;
  alignLg?: Align;
  alignXl?: Align;
  alignXxl?: Align;
  basis?: number | string;
  basisSm?: number | string;
  basisMd?: number | string;
  basisLg?: number | string;
  basisXl?: number | string;
  basisXxl?: number | string;
  className?: string;
  direction?: Direction;
  directionSm?: Direction;
  directionMd?: Direction;
  directionLg?: Direction;
  directionXl?: Direction;
  directionXxl?: Direction;
  fullHeight?: boolean;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  grow?: number;
  growSm?: number;
  growMd?: number;
  growLg?: number;
  growXl?: number;
  growXxl?: number;
  justify?: Justify;
  justifySm?: Justify;
  justifyMd?: Justify;
  justifyLg?: Justify;
  justifyXl?: Justify;
  justifyXxl?: Justify;
  mb?: Size;
  position?: Position;
  wrap?: Wrap;
  wrapSm?: Wrap;
  wrapMd?: Wrap;
  wrapLg?: Wrap;
  wrapXl?: Wrap;
  wrapXxl?: Wrap;
};

export const FlexWrap: FC<FlexWrapProps> = ({
  align = 'stretch',
  alignSm,
  alignMd,
  alignLg,
  alignXl,
  alignXxl,
  basis,
  basisSm,
  basisMd,
  basisLg,
  basisXl,
  basisXxl,
  direction = 'row',
  directionSm,
  directionMd,
  directionLg,
  directionXl,
  directionXxl,
  fullHeight,
  gap,
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  gapXxl,
  grow,
  growSm,
  growMd,
  growLg,
  growXl,
  growXxl,
  justify = 'flex-start',
  justifySm,
  justifyMd,
  justifyLg,
  justifyXl,
  justifyXxl,
  mb,
  position,
  wrap = 'wrap',
  wrapSm,
  wrapMd,
  wrapLg,
  wrapXl,
  wrapXxl,
  children,
  ...props
}) => (
  <StyledFlexWrap
    $align={align}
    $alignSm={alignSm}
    $alignMd={alignMd}
    $alignLg={alignLg}
    $alignXl={alignXl}
    $alignXxl={alignXxl}
    $basis={basis}
    $basisSm={basisSm}
    $basisMd={basisMd}
    $basisLg={basisLg}
    $basisXl={basisXl}
    $basisXxl={basisXxl}
    $direction={direction}
    $directionSm={directionSm}
    $directionMd={directionMd}
    $directionLg={directionLg}
    $directionXl={directionXl}
    $directionXxl={directionXxl}
    $fullHeight={fullHeight}
    $gap={gap}
    $gapSm={gapSm}
    $gapMd={gapMd}
    $gapLg={gapLg}
    $gapXl={gapXl}
    $gapXxl={gapXxl}
    $grow={grow}
    $growSm={growSm}
    $growMd={growMd}
    $growLg={growLg}
    $growXl={growXl}
    $growXxl={growXxl}
    $justify={justify}
    $justifySm={justifySm}
    $justifyMd={justifyMd}
    $justifyLg={justifyLg}
    $justifyXl={justifyXl}
    $justifyXxl={justifyXxl}
    $mb={mb}
    $position={position}
    $wrap={wrap}
    $wrapSm={wrapSm}
    $wrapMd={wrapMd}
    $wrapLg={wrapLg}
    $wrapXl={wrapXl}
    $wrapXxl={wrapXxl}
    {...props}
  >
    {children}
  </StyledFlexWrap>
);
