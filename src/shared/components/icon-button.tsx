import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, IconName } from '.';

type Variant = 'primary' | 'secondary' | 'error';

interface IStyledIconButtonProps {
  $variant: Variant;
}

const StyledIconButton = styled.button<IStyledIconButtonProps>`
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) => theme.gutters.size1};
  transition: background-color .15s ease-in-out;

  &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: .65;
    cursor: default;
    pointer-events: none;
  }
`

interface IIconButtonProps {
  iconName: IconName
  variant?: Variant
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton: FC<IIconButtonProps> = ({
  variant = 'primary',
  iconName,
  width = 25,
  height = 25,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <StyledIconButton
      $variant={variant}
      {...props}
    >
      <Icon
        name={iconName}
        color={colors[variant]}
        width={width}
        height={height}
      />
    </StyledIconButton>
  );
};
