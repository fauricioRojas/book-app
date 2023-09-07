import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const MotorcycleSeatIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 68"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      d="M62.9,27.7C53.2,28.6,42.5,26,37.7,24c-7.2-2.9-10.7-2.3-27.1-2.3c-4.2,0-7.7,3.1-8.4,7.1l0,0C2,30,2,29.7,2,33.7c0,4.1,3,7.6,7.1,8.3L40,46.2c5.3,0.9,12.4-1,17.2-6.2l8-7.3C67,30.7,65.5,27.5,62.9,27.7z M9.4,40.1C6.3,39.6,4,36.9,4,33.7v-1.6c2,1.4,5.4,2.1,10.1,2c6.6-0.1,12.3,1.1,16,2.1c4.8,1.2,7.3,2.9,7.6,7.6L9.4,40.1z M63.8,31.2l-8,7.3c-3.9,4.2-9.5,6.5-16,5.6c-0.3-5.9-3.3-8.3-9.1-9.8c-3.8-1-9.7-2.3-16.6-2.1c-6.4,0.1-8.7-1.2-9.4-2c-0.5-0.6-0.5-1-0.5-1.1c0.6-3,3.3-5.3,6.4-5.3c15.3,0,19.3-0.7,26.4,2.2c6,2.4,16.7,4.7,26.1,3.9C63.9,29.7,64.3,30.7,63.8,31.2z"
      fill={color}
      stroke={color}
    />
  </StyledSvg>
);
