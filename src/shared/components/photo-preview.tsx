'use client';

import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Box, Icon } from '.';

interface StyledPhotoPreviewProps {
  $backgroundImage: string;
}

const StyledPhotoPreview = styled.div<StyledPhotoPreviewProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 100%;
  /* background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: round;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  aspect-ratio: 16 / 9;
  width: 100%; */
`
const StyledTrashIconWrap = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  display: flex;
  height: 30px;
  justify-content: center;
  left: ${({ theme }) => theme.gutters.size1};
  position: absolute;
  top: ${({ theme }) => theme.gutters.size1};
  width: 30px;
`

interface IPhotoPreviewProps {
  photo?: string;
  onRemovePhoto: () => void;
}

export const PhotoPreview: FC<IPhotoPreviewProps> = ({ photo, onRemovePhoto }) => {
  const {colors } = useTheme();

  return photo && (
    <Box position="relative">
      <StyledTrashIconWrap>
        <Icon
          name="trash"
          height={18}
          width={16}
          color={colors.error}
          onClick={onRemovePhoto}
        />
      </StyledTrashIconWrap>
      <StyledPhotoPreview $backgroundImage={photo} />
    </Box>
  );
};
