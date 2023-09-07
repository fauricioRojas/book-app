import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BrakeFiberIcon: FC<ICommonIconProps> = ({
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
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <g transform="translate(-165.5 -1606.362)">
      <path
        fill={color}
        d="M180.5 1611.362a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm0 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3z"
      />
      <path
        fill={color}
        d="M194.5 1623.362c0-7.732-6.268-14-14-14v6a8 8 0 0 1 8 8z"
      />
    </g>
  </StyledSvg>
);
