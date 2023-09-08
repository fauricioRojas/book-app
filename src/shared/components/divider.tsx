import styled from 'styled-components';

const StyledDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.border};
  border: none;
  height: 1px;
  margin: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size0}`};
  width: 100%;
`;

export const Divider = () => <StyledDivider />;
