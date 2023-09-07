import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const CarIcon: FC<ICommonIconProps> = ({
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
    $isClickable={!!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M37.84 12.02A3.007 3.007 0 0 0 35 10H13c-1.31 0-2.43.84-2.84 2.02L6 24v16c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2h24v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V24l-4.16-11.98zM13 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 22l3-9h22l3 9H10z"
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </StyledSvg>
);
