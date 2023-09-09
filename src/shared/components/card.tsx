import { FC, PropsWithChildren } from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary900};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.gutters.size4};
`;

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
