import { FC, PropsWithChildren } from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  padding: ${({ theme }) => theme.gutters.size4};
`;

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
