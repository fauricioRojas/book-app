import styled from 'styled-components';

const StyledDivider = styled.hr`
  border-color: ${({ theme }) => theme.colors.border};
  border-style: solid;
  border-width: 0px 0px thin;
  flex-shrink: 0;
  margin: ${({ theme }) => theme.gutters.size0};
  width: 100%;
`;

export const Divider = () => <StyledDivider />;
