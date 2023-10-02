'use client';

import { Merriweather } from 'next/font/google';
import { FC, PropsWithChildren, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { display, marginBottom } from '@/shared/styles';
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
}

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sharedCss = css<StyledTypographyProps>`
  ${({ $color, theme }) => $color === 'primary' && css`
    color: ${theme.colors.primary};
  `}
  ${({ $color, theme }) => $color === 'primary-text' && css`
    color: ${theme.colors.primaryText};
  `}
  ${({ $color, theme }) => $color === 'secondary-text' && css`
    color: ${theme.colors.secondaryText};
  `}
  ${({ $color, theme }) => $color === 'error' && css`
    color: ${theme.colors.error};
  `}
  font-style: ${({ $italic }) => $italic ? 'italic' : undefined};
  ${({ $fontWeight, theme }) => $fontWeight === 'bold' && css`
    font-weight: ${theme.fontWeights.bold};
  `}
  ${({ $fontWeight, theme }) => $fontWeight === 'regular' && css`
    font-weight: ${theme.fontWeights.regular};
  `}
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: 1.2;
  margin-top: 0;
  text-align: ${({ $textAlign }) => $textAlign};
  transition: color .2s ease;
  ${display};
  ${marginBottom};
`;

const H1 = styled.h1<StyledTypographyProps>`
  font-size: 2rem;
  ${sharedCss};

  ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2.25rem;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2.5rem;
  }
`;
const H2 = styled.h2<StyledTypographyProps>`
  font-size: 1.75rem;
  ${sharedCss};

  ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2.25rem;
  }
`;
const H3 = styled.h3<StyledTypographyProps>`
  font-size: 1.5rem;
  ${sharedCss};

  ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2rem;
  }
`;
const H4 = styled.h4<StyledTypographyProps>`
  font-size: 1.25rem;
  ${sharedCss};

  ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.375rem;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.5rem;
  }
`;
const H5 = styled.h5<StyledTypographyProps>`
  font-size: 1.125rem;
  ${sharedCss};

  ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.25rem;
  }
`;
const H6 = styled.h6<StyledTypographyProps>`
  font-size: 1rem;
  ${sharedCss};
`;
const LABEL = styled.label<StyledTypographyProps>`
  font-size: 1rem;
  display: inline-block;
  ${sharedCss};
`;
const P = styled.p<StyledTypographyProps>`
  font-size: 1rem;
  ${sharedCss};
`;
const SPAN = styled.span<StyledTypographyProps>`
  font-size: calc(0.6rem + 0.3vw);
  ${({ theme }) => theme.breakpoints.lg} {
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
      className={variant === 'h1' ? merriweather.className : undefined}
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
