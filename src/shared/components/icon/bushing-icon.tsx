import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BushingIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 64 20"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <rect
      width="7"
      height="30"
      x="0"
      y="0"
      fill={color}
    />
    <rect
      width="25"
      height="20"
      x="6"
      y="5"
      fill={color}
    />
    <rect
      width="7"
      height="30"
      x="38"
      y="0"
      fill={color}
    />
    <rect
      width="20"
      height="20"
      x="44"
      y="5"
      fill={color}
    />
  </StyledSvg>
);
