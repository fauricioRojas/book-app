import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { Size } from '@/shared/types';

type Variant = 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary' | 'error';
type Type = 'button' | 'submit' | 'reset';

interface IStyledButtonProps {
  $variant: Variant;
  $block?: boolean;
  $mb?: Size;
  $mbSm?: Size;
  $mbMd?: Size;
  $mbLg?: Size;
  $mbXl?: Size;
  $mbXxl?: Size;
  $mt?: Size;
  $mtSm?: Size;
  $mtMd?: Size;
  $mtLg?: Size;
  $mtXl?: Size;
  $mtXxl?: Size;
}

const StyledButton = styled.button<IStyledButtonProps>`
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  cursor: pointer;
  font-family: var(--font-lato);
  font-size: 1rem;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  letter-spacing: 0.00938rem;
  line-height: inherit;
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  min-width: 64px;
  margin-top: ${({ $mt, theme }) => theme.gutters[`size${$mt}`]};
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size4}`};
  text-align: center;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  vertical-align: middle;

  ${({ $variant, theme }) => $variant === 'primary' && css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:focus, &:hover {
      background-color: ${theme.colors.primary900};
      border-color: ${theme.colors.primary900};
    }
  `}

  ${({ $variant, theme }) => $variant === 'outline-primary' && css`
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    &:focus, &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}

  ${({ $variant, theme }) => $variant === 'secondary' && css`
    background-color: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
    color: ${theme.colors.primaryText};

    &:focus, &:hover {
      background-color: ${theme.colors.secondary900};
      border-color: ${theme.colors.secondary900};
      color: ${theme.colors.white};
    }
  `}

  ${({ $variant, theme }) => $variant === 'outline-secondary' && css`
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.border};
    color: ${theme.colors.black};

    &:focus, &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primaryText};
    }
  `}

  ${({ $variant, theme }) => $variant === 'error' && css`
    background-color: ${theme.colors.error};
    border-color: ${theme.colors.error};
    color: ${theme.colors.white};

    &:focus, &:hover {
      background-color: ${theme.colors.error900};
      border-color: ${theme.colors.error900};
    }
  `}

  ${({ $block }) => $block && css`
    display: block;
    width: 100%;
  `}

  &:disabled {
    opacity: .65;
    cursor: default;
    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ $mbSm, theme }) => theme.gutters[`size${$mbSm}`]};
    margin-top: ${({ $mtSm, theme }) => theme.gutters[`size${$mtSm}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ $mbMd, theme }) => theme.gutters[`size${$mbMd}`]};
    margin-top: ${({ $mtMd, theme }) => theme.gutters[`size${$mtMd}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ $mbLg, theme }) => theme.gutters[`size${$mbLg}`]};
    margin-top: ${({ $mtLg, theme }) => theme.gutters[`size${$mtLg}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: ${({ $mbXl, theme }) => theme.gutters[`size${$mbXl}`]};
    margin-top: ${({ $mtXl, theme }) => theme.gutters[`size${$mtXl}`]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    margin-bottom: ${({ $mbXxl, theme }) => theme.gutters[`size${$mbXxl}`]};
    margin-top: ${({ $mtXxl, theme }) => theme.gutters[`size${$mtXxl}`]};
  }
`

interface IButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  variant?: Variant
  type?: Type
  block?: boolean;
  mb?: Size;
  mbSm?: Size;
  mbMd?: Size;
  mbLg?: Size;
  mbXl?: Size;
  mbXxl?: Size;
  mt?: Size;
  mtSm?: Size;
  mtMd?: Size;
  mtLg?: Size;
  mtXl?: Size;
  mtXxl?: Size;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  block,
  mb,
  mbSm,
  mbMd,
  mbLg,
  mbXl,
  mbXxl,
  mt,
  mtSm,
  mtMd,
  mtLg,
  mtXl,
  mtXxl,
  type = 'button',
  children,
  ...props
}) => (
  <StyledButton
    $variant={variant}
    $block={block}
    $mb={mb}
    $mbSm={mbSm}
    $mbMd={mbMd}
    $mbLg={mbLg}
    $mbXl={mbXl}
    $mbXxl={mbXxl}
    $mt={mt}
    $mtSm={mtSm}
    $mtMd={mtMd}
    $mtLg={mtLg}
    $mtXl={mtXl}
    $mtXxl={mtXxl}
    type={type}
    {...props}
  >
    {children}
  </StyledButton>
);
