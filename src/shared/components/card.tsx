import { FC, PropsWithChildren } from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 100%;
  padding: ${({ theme }) => theme.gutters.size4};
`;

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
