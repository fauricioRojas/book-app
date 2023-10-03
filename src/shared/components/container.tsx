import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: ${({ theme }) => theme.gutters.size4};
  padding-right: ${({ theme }) => theme.gutters.size4};

  ${({ theme }) => theme.breakpoints.sm} {
    max-width: 33.75rem;
  }
  ${({ theme }) => theme.breakpoints.md} {
    max-width: 45rem;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    max-width: 60rem;
  }
  ${({ theme }) => theme.breakpoints.xl} {
    max-width: 71.25rem;
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    max-width: 82.5rem;
  }
`;

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
