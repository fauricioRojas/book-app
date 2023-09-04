'use client';

import { useMemo, FC, PropsWithChildren } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

import { Size } from '@/shared/types';

type Color = 'primary' | 'error';
type FontWeight = 'bold' | 'regular';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';

interface IStyledTypographyProps {
  $color?: Color;
  $italic?: boolean;
  $fontWeight?: FontWeight;
  $mb?: Size;
  $center?: boolean;
  $display?: boolean;
  $displaySm?: boolean;
  $displayMd?: boolean;
  $displayLg?: boolean;
  $displayXl?: boolean;
  $displayXxl?: boolean;
  theme: DefaultTheme;
}

const sharedCss = ({ $color, $italic, $mb, theme }: IStyledTypographyProps) => css`
  ${$color === 'primary' && css`
    color: ${theme.colors.primary};
  `}
  ${$color === 'error' && css`
    color: ${theme.colors.error};
  `}
  ${!$color && css`
    color: ${theme.colors.primaryText};
  `}
  ${({ $display }: any) => typeof $display === 'boolean' && css`
    display: ${$display ? 'block' : 'none'};
  `}
  font-style: ${$italic ? 'italic' : undefined};
  ${({ $fontWeight }: IStyledTypographyProps) => $fontWeight === 'bold' && css`
    font-weight: ${theme.fontWeights.bold};
  `}
  ${({ $fontWeight }: IStyledTypographyProps) => $fontWeight === 'regular' && css`
    font-weight: ${theme.fontWeights.regular};
  `}
  letter-spacing: 0.00938rem;
  line-height: 1.2;
  margin-bottom: ${theme.gutters[`size${$mb}`]};
  transition: color .2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ $displaySm }: IStyledTypographyProps) => typeof $displaySm === 'boolean' && css`
      display: ${$displaySm ? 'block' : 'none'};
    `}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $displayMd }: IStyledTypographyProps) => typeof $displayMd === 'boolean' && css`
      display: ${$displayMd ? 'block' : 'none'};
    `}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $displayLg }: IStyledTypographyProps) => typeof $displayLg === 'boolean' && css`
      display: ${$displayLg ? 'block' : 'none'};
    `}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ $displayXl }: IStyledTypographyProps) => typeof $displayXl === 'boolean' && css`
      display: ${$displayXl ? 'block' : 'none'};
    `}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${({ $displayXxl }: IStyledTypographyProps) => typeof $displayXxl === 'boolean' && css`
      display: ${$displayXxl ? 'block' : 'none'};
    `}
  }
`
const sharedHeadingCss = ({ $center }: IStyledTypographyProps) => css`
  margin-top: 0;
  text-align: ${$center ? 'center' : undefined};
`

const H1 = styled.h1`
  font-size: calc(1.375rem + 1.5vw);
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 3rem;
  }
  ${sharedHeadingCss}
  ${sharedCss};
`;
const H2 = styled.h2`
  font-size: calc(1.325rem + 0.9vw);
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 2.5rem;
  }
  ${sharedHeadingCss}
  ${sharedCss};
`;
const H3 = styled.h3`
  font-size: calc(1.3rem + 0.6vw);
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 2rem;
  }
  ${sharedHeadingCss}
  ${sharedCss};
`;
const H4 = styled.h4`
  font-size: calc(1.275rem + 0.3vw);
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 1.5rem;
  }
  ${sharedHeadingCss}
  ${sharedCss};
`;
const H5 = styled.h5`
  font-size: 1.25rem;
  ${sharedHeadingCss}
  ${sharedCss};
`;
const H6 = styled.h6`
  font-size: 1rem;
  ${sharedHeadingCss}
  ${sharedCss};
`;
const LABEL = styled.label`
  font-size: 1rem;
  display: inline-block;
  ${sharedCss};
`;
const P = styled.p`
  font-size: 1rem;
  margin-top: 0;
  ${sharedCss};
`;
const SPAN = styled.span`
  font-size: 0.875rem;
  ${sharedCss};
`;


const TYPOGRAPHY_MAPPER: Record<Variant, any> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  label: LABEL,
  p: P,
  span: SPAN,
};

interface ITypographyProps extends PropsWithChildren {
  variant: Variant;
  className?: string;
  fontWeight?: FontWeight;
  center?: boolean;
  italic?: boolean;
  color?: Color;
  mb?: Size;
  display?: boolean;
  displaySm?: boolean;
  displayMd?: boolean;
  displayLg?: boolean;
  displayXl?: boolean;
  displayXxl?: boolean;
}

export const Typography: FC<ITypographyProps> = ({
  variant,
  fontWeight = 'regular',
  center,
  italic,
  color,
  mb = 0,
  display,
  displaySm,
  displayMd,
  displayLg,
  displayXl,
  displayXxl,
  children,
  ...props
}) => {
  const Element = useMemo(() => TYPOGRAPHY_MAPPER[variant], [variant]);

  return (
    <Element
      $center={center}
      $fontWeight={fontWeight}
      $italic={italic}
      $color={color}
      $mb={mb}
      $display={display}
      $displaySm={displaySm}
      $displayMd={displayMd}
      $displayLg={displayLg}
      $displayXl={displayXl}
      $displayXxl={displayXxl}
      {...props}
    >
      {children}
    </Element>
  );
};
