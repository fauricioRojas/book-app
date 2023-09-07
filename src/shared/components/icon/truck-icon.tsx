import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const TruckIcon: FC<ICommonIconProps> = ({
  color,
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
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      fill="none"
      d="M0 0h48v48H0z"
    />
    <path
      fill={color}
      d="M40 16h-6V8H6c-2.21 0-4 1.79-4 4v22h4c0 3.31 2.69 6 6 6s6-2.69 6-6h12c0 3.31 2.69 6 6 6s6-2.69 6-6h4V24l-6-8zM12 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm27-18 3.93 5H34v-5h5zm-3 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  </StyledSvg>
);