import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

import { useLanguage } from '@/contexts';
import { Box } from '.';

const StyledInputFile = styled.input`
  display: none;
`
const StyledInputFileLabel = styled.label`
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  display: block;
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
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

type CameraProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Camera: FC<CameraProps> = ({ onChange }) => {
  const { translation } = useLanguage();

  return (
    <Box>
      <StyledInputFile
        type="file"
        id="camera"
        accept="image/*"
        capture
        onChange={onChange}
      />
      <StyledInputFileLabel
        htmlFor="camera"
      >
        {translation.openCamera}
      </StyledInputFileLabel>
    </Box>
  );
};
