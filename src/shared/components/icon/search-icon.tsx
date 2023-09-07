import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const SearchIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256.001 256.001"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={!!props.onClick}
    {...props}
  >
    <rect
      width="256"
      height="256"
      fill="none"
    />
    <circle
      cx="115.997"
      cy="116"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="175.391"
      x2="223.991"
      y1="175.4"
      y2="224.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </StyledSvg>
);
