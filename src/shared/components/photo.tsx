'use client';

import { ChangeEvent, FC } from 'react';

import {
  BrowseFiles,
  Camera,
  FlexWrap,
  PhotoPreview,
  Typography,
} from '.';
import { useLanguage } from '@/contexts';
import { detectMobileDevice } from '@/shared/utils';

interface IPhotoProps {
  photo?: string;
  onChangePhoto: (photo?: string) => void;
}

const isMobileDevice = detectMobileDevice();

export const Photo: FC<IPhotoProps> = ({ photo, onChangePhoto }) => {
  const { translation } = useLanguage();

  const handleChangePhoto = (browsedPhoto?: string) => {
    onChangePhoto(browsedPhoto);
  };

  const handleChoosePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        handleChangePhoto(reader.result as string);
      }
      reader.onerror = () => handleChangePhoto();
    }
  };

  return (
    <FlexWrap direction="column" gap={1}>
      <Typography variant="label">{translation.photo} <Typography variant="span" color="secondary-text">({translation.optional})</Typography></Typography>
      {!photo && (
        <FlexWrap align="center" justify="flex-start" gap={3}>
          <BrowseFiles
            accept="image/png, image/jpeg"
            onChange={handleChoosePhoto}
          />
          {isMobileDevice && (
            <>
              {` ${translation.or} `}
              <Camera onChange={handleChoosePhoto} />
            </>
          )}
        </FlexWrap>
      )}
      <PhotoPreview photo={photo} onRemovePhoto={onChangePhoto} />
    </FlexWrap>
  );
};
