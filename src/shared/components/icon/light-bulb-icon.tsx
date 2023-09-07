import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const LightBulbIcon: FC<ICommonIconProps> = ({
  color,
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
    $isClickable={!!props.onClick}
    {...props}
  >
    <g transform="translate(-204.5 -1608.362)">
      <rect
        width="10"
        height="6"
        x="215.5"
        y="1630.362"
        fill={color}
      />
      <path
        fill="none"
        stroke={color}
        d="M218.5 1636.362v2m4-2v2"
      />
      <path
        fill={color}
        d="M217.5 1627.862v-13.5c0-.83.669-1.5 1.5-1.5h3c.831 0 1.5.67 1.5 1.5v13.5"
      />
      <path
        fill={color}
        d="M214.5 1629.87c0-1.113.892-2.008 2-2.008h8c1.108 0 2 .895 2 2.007v.993h-12v-.993z"
      />
      <path
        fill="none"
        stroke={color}
        d="M210.5 1630.862h20"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M225.493 1612.862h1m-1.49-1.994-.5.866M215.507 1612.862h-1m1.49-1.994.5.866"
      />
    </g>
  </StyledSvg>
);
