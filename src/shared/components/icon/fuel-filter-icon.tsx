import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const FuelFilterIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 32 32"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M23 23H7a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1ZM8 21h14V11H8Z"
      fill={color}
    />
    <path
      d="M7 19H3a1 1 0 0 1 0-2h3v-2H3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm22 2a1 1 0 0 1-.55-.17L25.7 19H23a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 .55.17l3 2a1 1 0 1 1-1.11 1.66L25.7 15H24v2h2a1 1 0 0 1 .55.17l3 2A1 1 0 0 1 29 21zm-14-3.5a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm-10 0a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm3 3a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm-5-6a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill={color}
    />
  </StyledSvg>
);
