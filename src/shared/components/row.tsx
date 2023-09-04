import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => `-${theme.gutters.size4}`};
  margin-right: ${({ theme }) => `-${theme.gutters.size4}`};
`

export const Row: FC<PropsWithChildren> = ({ children }) => (
  <StyledRow>{children}</StyledRow>
);
