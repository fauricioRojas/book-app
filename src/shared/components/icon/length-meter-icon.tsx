import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const LengthMeterIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M60 34.9v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-10c0-.55.45-1 1-1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v4c0 .55.45 1 1 1s1-.45 1-1v-4h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1 .45 1 1zM54.71 22.42l-2.83-2.83c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.12 1.12H12.41l1.12-1.12c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-2.83 2.83c-.19.19-.29.44-.29.71s.11.52.29.71l2.83 2.83c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02 0-1.41l-1.12-1.12H51.59l-1.12 1.12c-.39.39-.39 1.02 0 1.41.2.2.45.29.71.29s.51-.1.71-.29l2.83-2.83c.19-.19.29-.44.29-.71s-.11-.52-.29-.71zM59 29.1c-.55 0-1-.45-1-1v-10c0-.55.45-1 1-1s1 .45 1 1v10c0 .55-.45 1-1 1zM5 29.1c-.55 0-1-.45-1-1v-10c0-.55.45-1 1-1s1 .45 1 1v10c0 .55-.45 1-1 1z"
      fill="currentColor"
    />
  </StyledSvg>
);
