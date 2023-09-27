import { FC, PropsWithChildren } from "react";
import styled, { css } from 'styled-components';

type StyledCardProps = {
  $fullHeight: boolean;
  $glassEffect: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  height: ${({ $fullHeight }) => $fullHeight ? '100%' : undefined};
  padding: ${({ theme }) => theme.gutters.size4};

  ${({ $glassEffect }) => $glassEffect
    ? css`
        backdrop-filter: blur(8px);
        background: ${({ theme }) => theme.colors.glass};
        border-radius: ${({ theme }) => theme.gutters.borderRadius};
        -webkit-backdrop-filter: blur(8px);
      `
    : css`
        background-color: ${({ theme }) => theme.colors.card};
      `
  };
`;

type CardProps = PropsWithChildren & {
  className?: string;
  fullHeight?: boolean;
  glassEffect?: boolean;
}

export const Card: FC<CardProps> = ({
  fullHeight = true,
  glassEffect = false,
  children,
  ...rest
}) => (
  <StyledCard
    {...rest}
    $fullHeight={fullHeight}
    $glassEffect={glassEffect}
  >
    {children}
  </StyledCard>
);
