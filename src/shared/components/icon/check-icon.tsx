import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const CheckIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={!!props.onClick}
    {...props}
  >
    <rect
      width={width}
      height={height}
      fill="none"
    />
    <path
      fill={color}
      d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,8.00675,0,0,1,11.0625,11.57812Z"
    />
  </StyledSvg>
);
