import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const WeightIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 8.467 8.467"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="m.665 7.364.848-4.895a.265.265 0 0 1 .26-.22h4.92a.265.265 0 0 1 .26.22l.848 4.895a.264.264 0 0 1-.26.31H.925a.264.264 0 0 1-.26-.31z"
      fill={color}
    />
    <path
      d="M4.233 289.195c-.581 0-1.058.477-1.058 1.058 0 .092.016.18.038.265h.557a.534.534 0 1 1 .926 0h.557c.023-.085.039-.173.039-.265 0-.581-.477-1.058-1.059-1.058z"
      transform="translate(0 -288.533)"
      fill={color}
    />
  </StyledSvg>
);
