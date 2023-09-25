'use client';

import { useMemo, FC, PropsWithChildren } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

import type { Size } from '@/shared/types';

type Color = 'primary' | 'primary-text' | 'secondary-text' | 'error';
type FontWeight = 'bold' | 'regular';
type TextAlign = 'left' | 'center' | 'right';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';

type StyledTypographyProps = {
  $color?: Color;
  $italic?: boolean;
  $fontWeight?: FontWeight;
  $mb?: Size;
  $textAlign?: TextAlign;
  $display?: boolean;
  $displaySm?: boolean;
  $displayMd?: boolean;
  $displayLg?: boolean;
  $displayXl?: boolean;
  $displayXxl?: boolean;
  theme: DefaultTheme;
}

const sharedCss = ({ $color, $italic, $mb, $textAlign, theme }: StyledTypographyProps) => css`
  ${$color === 'primary' && css`
    color: ${theme.colors.primary};
  `}
  ${$color === 'primary-text' && css`
    color: ${theme.colors.primaryText};
  `}
  ${$color === 'secondary-text' && css`
    color: ${theme.colors.secondaryText};
  `}
  ${$color === 'error' && css`
    color: ${theme.colors.error};
  `}
  ${({ $display }: any) => typeof $display === 'boolean' && css`
    display: ${$display ? 'block' : 'none'};
  `}
  font-style: ${$italic ? 'italic' : undefined};
  ${({ $fontWeight }: StyledTypographyProps) => $fontWeight === 'bold' && css`
    font-weight: ${theme.fontWeights.bold};
  `}
  ${({ $fontWeight }: StyledTypographyProps) => $fontWeight === 'regular' && css`
    font-weight: ${theme.fontWeights.regular};
  `}
  letter-spacing: 0.00938rem;
  line-height: 1.2;
  margin-bottom: ${theme.gutters[`size${$mb}`]};
  margin-top: 0;
  text-align: ${$textAlign};
  transition: color .2s ease;

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    ${({ $displaySm }: StyledTypographyProps) => typeof $displaySm === 'boolean' && css`
      display: ${$displaySm ? 'block' : 'none'};
    `}
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    ${({ $displayMd }: StyledTypographyProps) => typeof $displayMd === 'boolean' && css`
      display: ${$displayMd ? 'block' : 'none'};
    `}
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $displayLg }: StyledTypographyProps) => typeof $displayLg === 'boolean' && css`
      display: ${$displayLg ? 'block' : 'none'};
    `}
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    ${({ $displayXl }: StyledTypographyProps) => typeof $displayXl === 'boolean' && css`
      display: ${$displayXl ? 'block' : 'none'};
    `}
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    ${({ $displayXxl }: StyledTypographyProps) => typeof $displayXxl === 'boolean' && css`
      display: ${$displayXxl ? 'block' : 'none'};
    `}
  }
`

const H1 = styled.h1`
  font-size: calc(1.375rem + 1.5vw);
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 3rem;
  }
  ${sharedCss};
`;
const H2 = styled.h2`
  font-size: calc(1.325rem + 0.9vw);
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 2.5rem;
  }
  ${sharedCss};
`;
const H3 = styled.h3`
  font-size: calc(1.3rem + 0.6vw);
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 2rem;
  }
  ${sharedCss};
`;
const H4 = styled.h4`
  font-size: calc(1.275rem + 0.3vw);
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 1.5rem;
  }
  ${sharedCss};
`;
const H5 = styled.h5`
  font-size: 1.25rem;
  ${sharedCss};
`;
const H6 = styled.h6`
  font-size: 1rem;
  ${sharedCss};
`;
const LABEL = styled.label`
  font-size: 1rem;
  display: inline-block;
  ${sharedCss};
`;
const P = styled.p`
  font-size: 1rem;
  ${sharedCss};
`;
const SPAN = styled.span`
  font-size: calc(0.6rem + 0.3vw);
  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
  }
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

type TypographyProps = PropsWithChildren & {
  variant: Variant;
  className?: string;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
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

export const Typography: FC<TypographyProps> = ({
  variant,
  fontWeight = 'regular',
  textAlign,
  italic,
  color = 'primary-text',
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
      $textAlign={textAlign}
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
