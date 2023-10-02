import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ErrorIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 24 24"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.242,14.829a1,1,0,0,1,0,1.414,1.026,1.026,0,0,1-1.414,0L12,13.414,9.172,16.243a1.01,1.01,0,0,1-1.414,0,1,1,0,0,1,0-1.414L10.586,12,7.758,9.171A1,1,0,1,1,9.172,7.757L12,10.586l2.828-2.829a1,1,0,1,1,1.414,1.414L13.414,12Z"
    />
  </StyledSvg>
);
