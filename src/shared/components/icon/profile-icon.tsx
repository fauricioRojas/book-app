import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const Profilecon: FC<CommonIconProps> = ({
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
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,7c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3	C9,8.3,10.3,7,12,7z M12,20c-2.2,0-4.3-0.9-5.8-2.5c2.2-3.2,6.5-4,9.7-1.8c0.7,0.5,1.3,1.1,1.8,1.8C16.3,19.1,14.2,20,12,20z"
      fill="currentColor"
    />
  </StyledSvg>
);
