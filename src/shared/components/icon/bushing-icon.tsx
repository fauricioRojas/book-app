import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BushingIcon: FC<ICommonIconProps> = ({
  color,
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
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <rect
      width="20"
      height="20"
      x="0"
      y="4"
      fill={color}
    />
    <rect
      width="20"
      height="20"
      x="24"
      y="4"
      fill={color}
    />
    <rect
      width="14"
      height="20"
      x="48"
      y="4"
      fill={color}
    />
  </StyledSvg>
);
