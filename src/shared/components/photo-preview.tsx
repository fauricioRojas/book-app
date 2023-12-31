'use client';

import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Box, Icon } from '.';

type StyledPhotoPreviewProps = {
  $backgroundImage: string;
};

const StyledPhotoPreview = styled.div<StyledPhotoPreviewProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 150px;
  max-height: 300px;
  width: 100%;
`;
const StyledTrashIconWrap = styled.div`
  align-items: center;
  backdrop-filter: ${({ theme }) => theme.backdropBlur};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  height: 30px;
  justify-content: center;
  left: ${({ theme }) => theme.gutters.size1};
  position: absolute;
  top: ${({ theme }) => theme.gutters.size1};
  width: 30px;
  -webkit-backdrop-filter: ${({ theme }) => theme.backdropBlur};
`;

type PhotoPreviewProps = {
  photo?: string;
  onRemovePhoto?: () => void;
};

export const PhotoPreview: FC<PhotoPreviewProps> = ({
  photo,
  onRemovePhoto,
}) => {
  const { colors } = useTheme();

  return (
    photo && (
      <Box position="relative">
        {onRemovePhoto && (
          <StyledTrashIconWrap>
            <Icon
              name="trash"
              size={18}
              color={colors.error}
              onClick={onRemovePhoto}
            />
          </StyledTrashIconWrap>
        )}
        <StyledPhotoPreview $backgroundImage={photo} />
      </Box>
    )
  );
};
