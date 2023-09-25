import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const MotorcycleIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 30 20"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    transform="scale(1.15)"
    {...props}
  >
    <path
      d="M5 18c-1.654 0-3-1.346-3-3s1.346-3 3-3c.882 0 1.665.39 2.211 1h2.358C8.797 11.236 7.048 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5c2.048 0 3.797-1.238 4.569-3H7.211C6.665 17.609 5.882 18 5 18zM25.034 10.002l.93 2.17C27.144 12.576 28 13.684 28 15c0 1.654-1.346 3-3 3-1.654 0-3-1.346-3-3 0-.451.105-.875.286-1.258l-.925-2.156C20.521 12.479 20 13.676 20 15c0 2.762 2.238 5 5 5 2.762 0 5-2.238 5-5C30 12.25 27.78 10.021 25.034 10.002z"
      fill={color}
    />
    <polygon
      points="25.919 14.606 19.659 0 15 0 15 2 18.341 2 19.198 4 17 4 15 7 12 7 11 6 3 6 2 9 9 9 11.857 14 5 14 5 16 16 16 21.077 8.384 24.081 15.393"
      fill={color}
    />
    <path
      d="M25,2c-1.105,0-2,0.895-2,2c0,1.103,0.895,2,2,2V2z"
      fill={color}
    />
  </StyledSvg>
);
