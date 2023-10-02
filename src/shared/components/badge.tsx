import { FC, PropsWithChildren } from "react";
import styled, { css, keyframes } from 'styled-components';

type Color = 'primary' | 'secondary' | 'error';
type Variant = 'circular' | 'pill';

type StyledBadgeProps = {
  $color: Color;
  $animate: boolean;
  $variant: Variant;
}

const getPulseAnimation = keyframes<StyledBadgeProps>`
  0% {
    box-shadow: ${({ $color, theme }) => `0 0 0 0px ${theme.colors[$color]}40`};
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
`;

const StyledBadge = styled.span<StyledBadgeProps>`
  background-color: ${({ $color, theme }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-items: center;

  ${({ $animate, $color, theme }) => $animate && css`
    animation: ${getPulseAnimation} 2s infinite;
    box-shadow: ${`0px 0px 1px 1px ${theme.colors[$color]}40`};
  `};

  ${({ $variant }) => $variant === 'circular' && css`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  `};

  ${({ $variant }) => $variant === 'pill' && css`
    border-radius: 3rem;
    height: 3rem;
    padding-inline: 1rem;
  `};
`;

type BadgeProps = PropsWithChildren & {
  color: Color;
  variant: Variant;
  animate?: boolean;
}
  
export const Badge: FC<BadgeProps> = ({
  color,
  variant,
  animate = false,
  children,
}) => (
  <StyledBadge
    $color={color}
    $animate={animate}
    $variant={variant}
  >
    {children}
  </StyledBadge>
);
