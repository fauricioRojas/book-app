import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

import { Box } from '.';
import { useLanguage } from '@/contexts';

const StyledInputFile = styled.input`
  display: none;
`
const StyledInputFileLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  display: block;
  font-family: var(--font-lato);
  font-size: 1rem;
  font-weight: ${({ theme }) => `${theme.fontWeights.regular}`};
  letter-spacing: 0.00938rem;
  line-height: 1;
  min-width: 64px;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  text-align: center;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`

interface IBrowseFilesProps {
  accept?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const BrowseFiles: FC<IBrowseFilesProps> = ({
  accept,
  onChange,
}) => {
  const { translation } = useLanguage();

  return (
    <Box>
      <StyledInputFile
        type="file"
        id="browse-files"
        accept={accept}
        onChange={onChange}
      />
      <StyledInputFileLabel
        htmlFor="browse-files"
      >
        {translation.browse}
      </StyledInputFileLabel>
    </Box>
  );
};
