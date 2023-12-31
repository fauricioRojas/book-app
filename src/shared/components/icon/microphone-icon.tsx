import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const MicrophoneIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4,9a1,1,0,0,0-1,1,9.01,9.01,0,0,0,8,8.941V22H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.941A9.01,9.01,0,0,0,21,10a1,1,0,0,0-2,0A7,7,0,0,1,5,10,1,1,0,0,0,4,9Z"
    />
    <path
      fill="currentColor"
      d="M12,15a5.006,5.006,0,0,0,5-5V5A5,5,0,0,0,7,5v5A5.006,5.006,0,0,0,12,15ZM9,5a3,3,0,0,1,6,0v5a3,3,0,0,1-6,0Z"
    />
  </StyledSvg>
);
