import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const MoonIcon: FC<ICommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M46.9,31.7c-0.6-0.6-1.5-0.7-2.3-0.4c-2.9,1.5-6.1,2.3-9.5,2.3c-11.5,0-20.8-9.3-20.8-20.8c0-3.3,0.8-6.5,2.3-9.5  c0.4-0.8,0.2-1.7-0.4-2.3c-0.6-0.6-1.5-0.7-2.3-0.4C5.7,5,0.5,13.4,0.5,22.8c0,13.6,11.1,24.7,24.7,24.7c9.3,0,17.8-5.2,22-13.5  C47.7,33.2,47.5,32.3,46.9,31.7z"
      fill={color}
    />
  </StyledSvg>
);
