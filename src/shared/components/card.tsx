import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type StyledCardProps = {
  $background: boolean;
  $border: boolean;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ $background, theme }) => $background ? theme.colors.card : undefined};
  border: ${({ $border, theme }) => $border ? `1px solid ${theme.colors.border}` : undefined};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100%;
  padding: ${({ theme }) => theme.gutters.size4};
`;

type CardProps = PropsWithChildren & {
  background?: boolean;
  border?: boolean;
};

export const Card: FC<CardProps> = ({
  background = false,
  border = false,
  children,
}) => (
  <StyledCard
    $background={background}
    $border={border}
  >
    {children}
  </StyledCard>
);
