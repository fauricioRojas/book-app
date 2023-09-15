import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BikeIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 64 64"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    transform="scale(1.25)"
    {...props}
  >
    <path
      d="M13.15,40.53a1,1,0,0,1,0-1l5.35-10.69A11.81,11.81,0,0,0,14,28,12,12,0,1,0,26,41H14A1,1,0,0,1,13.15,40.53Z"
      fill={color}
    />
    <path
      d="M26 39a12 12 0 0 0-5.72-9.25L15.62 39zM50 28a11.92 11.92 0 0 0-4.28.79L50.9 39.57a1 1 0 0 1-.47 1.33A.94.94 0 0 1 50 41a1 1 0 0 1-.9-.57L43.93 29.65A12 12 0 1 0 50 28z"
      fill={color}
    />
    <path
      d="M39.36,15.53l4-1.6a1,1,0,0,0-.74-1.86l-5,2a1,1,0,0,0-.53,1.36L39.78,21H24l-2.4-5H24a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2h1.37l2.7,5.63-3.61,7.23a12.32,12.32,0,0,1,1.78.89l2.93-5.84L30.41,39H26c0,.33,0,.66,0,1s0,.67,0,1h6a1,1,0,0,0,.39-.09h0l0,0a1,1,0,0,0,.28-.21l0-.06a1,1,0,0,0,.11-.16L41.17,23.9l2.76,5.75a11.78,11.78,0,0,1,1.79-.86ZM32,37.73,24.95,23H39.38Z"
      fill={color}
    />
  </StyledSvg>
);
