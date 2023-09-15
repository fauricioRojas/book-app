import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { Size } from '@/shared/types';
import { Icon, IconName } from '.';

type SolidVariant = 'primary' | 'secondary' | 'error';
type NonSolidVariant = 'outline-primary' | 'outline-secondary' | 'text';
type Variant = 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary' | 'error' | 'text';
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
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  height: 40px;
  justify-content: center;
  letter-spacing: 0.00938rem;
  line-height: normal;
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
      background-color: ${theme.colors.primary800};
      border-color: ${theme.colors.primary800};
    }
  `}

  ${({ $variant, theme }) => $variant === 'outline-primary' && css`
    background-color: transparent;
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
    color: ${theme.colors.white};

    &:focus, &:hover {
      background-color: ${theme.colors.secondary800};
      border-color: ${theme.colors.secondary800};
    }
  `}

  ${({ $variant, theme }) => $variant === 'outline-secondary' && css`
    background-color: transparent;
    border-color: ${theme.colors.border};
    color: ${theme.colors.primaryText};

    &:focus, &:hover {
      background-color: ${theme.colors.secondary};
      border-color: ${theme.colors.secondary};
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

  ${({ $variant, theme }) => $variant === 'text' && css`
    background-color: transparent;
    border-color: transparent;
    color: ${theme.colors.primary};
    padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};

    &:focus, &:hover {
      background-color: ${`${theme.colors.primary100}33`};
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

type SolidButtonProps = {
  variant: SolidVariant;
  leftIconName?: IconName;
  rightIconName?: IconName;
}
type NonSolidButtonProps = {
  variant: NonSolidVariant;
}
type ButtonProps = {
  className?: string;
  disabled?: boolean;
  type?: Type;
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
  children?: ReactNode;
} & (SolidButtonProps | NonSolidButtonProps)

export const Button: FC<ButtonProps> = (props) => {
  const [leftIcon, setLeftIcon] = useState<ReactNode | null>(null);
  const [rightIcon, setRightIcon] = useState<ReactNode | null>(null);
  const { colors } = useTheme();

  useEffect(() => {
    if (props.variant === 'primary' || props.variant === 'secondary' || props.variant === 'error') {
      if (props.leftIconName) {
        setLeftIcon(
          <Icon
            name={props.leftIconName}
            width={18}
            height={18}
            color={colors.white}
            mr={2}
            pointer
          />
        );
      }
      if (props.rightIconName) {
        setRightIcon(
          <Icon
            name={props.rightIconName}
            width={18}
            height={18}
            color={colors.white}
            ml={2}
            pointer
          />
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <StyledButton
      $variant={props.variant || 'primary'}
      $block={props.block}
      $mb={props.mb}
      $mbSm={props.mbSm}
      $mbMd={props.mbMd}
      $mbLg={props.mbLg}
      $mbXl={props.mbXl}
      $mbXxl={props.mbXxl}
      $mt={props.mt}
      $mtSm={props.mtSm}
      $mtMd={props.mtMd}
      $mtLg={props.mtLg}
      $mtXl={props.mtXl}
      $mtXxl={props.mtXxl}
      type={props.type || 'button'}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {leftIcon}
      {props.children}
      {rightIcon}
    </StyledButton>
  );
};
