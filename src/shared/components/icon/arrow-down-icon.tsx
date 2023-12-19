import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ArrowDownIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size ='sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
    />
  </StyledSvg>
);
