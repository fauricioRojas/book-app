import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const PickupIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      fill={color}
      d="M16,6H10.5v4H1v5H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h2V12a2,2,0,0,0-2-2H19L16,6M12,7.5h3.5l2,2.5H12V7.5m-6,6A1.5,1.5,0,1,1,4.5,15,1.5,1.5,0,0,1,6,13.5m12,0A1.5,1.5,0,1,1,16.5,15,1.5,1.5,0,0,1,18,13.5Z"
    />
    <rect
      width={width}
      height={height}
      fill="none"
    />
  </StyledSvg>
);
