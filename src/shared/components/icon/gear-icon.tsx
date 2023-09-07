import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const GearIcon: FC<ICommonIconProps> = ({
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
      d="M65.5,41.4l-0.9-0.5c-5.5-3-5.5-10.9,0-13.9l0.9-0.5c0.4-0.2,0.6-0.7,0.5-1.1c-0.2-0.9-1.1-0.7-2-0.7c-6.3,0.1-10.1-6.7-6.9-12l0.5-0.9c0.5-0.9-0.5-1.9-1.4-1.4L55.3,11c-5.3,3.2-12.1-0.7-12-6.9l0-1c0-1-1.4-1.4-1.9-0.5l-0.5,0.9c-3,5.5-10.9,5.5-13.9,0l-0.5-0.9C26.1,1.6,24.7,2,24.7,3l0,1c0.1,6.2-6.7,10.2-12,6.9l-0.9-0.5c-0.9-0.5-1.9,0.5-1.4,1.4l0.5,0.9c3.2,5.4-0.7,12.1-6.9,12c-1.1,0-1,0-1,0c-0.5,0-0.8,0.3-1,0.7c-0.1,0.4,0.1,0.9,0.5,1.1l0.9,0.5c5.5,3,5.5,10.9,0,13.9l-0.9,0.5C1.6,41.9,2,43.3,3,43.3l1,0c6.2-0.1,10.2,6.7,6.9,12l-0.5,0.9c-0.5,0.9,0.5,1.9,1.4,1.4l0.9-0.5c2.5-1.5,5.5-1.5,8.1-0.1c2.5,1.5,4,4.1,4,7l0,1c0,1,1.4,1.4,1.9,0.5l0.5-0.9c3-5.5,10.9-5.5,13.9,0l0.5,0.9c0.5,0.9,1.9,0.5,1.9-0.5l0-1c-0.1-6.2,6.7-10.2,12-6.9l0.9,0.5c0.9,0.5,1.9-0.5,1.4-1.4L57,55.3c-3.2-5.4,0.8-12.2,6.9-12l1,0c0.5,0,0.9-0.3,1-0.7C66.1,42.1,65.9,41.7,65.5,41.4z M54.4,54.4c-5.6-1.9-11.8,1.6-12.9,7.5c-3.9-4.5-11-4.5-14.9,0c-0.5-2.8-2.2-5.2-4.8-6.7c-2.5-1.5-5.5-1.7-8.2-0.8c1.9-5.6-1.6-11.8-7.5-12.9c4.5-3.9,4.5-11,0-14.9c5.9-1.1,9.4-7.3,7.5-12.9c5.7,1.9,11.8-1.6,12.9-7.5c3.9,4.5,11,4.5,14.9,0c1.1,5.8,7.3,9.4,12.9,7.5c-1.9,5.6,1.6,11.8,7.5,12.9c-4.5,3.9-4.5,11,0,14.9C56,42.6,52.5,48.8,54.4,54.4z"
      fill={color}
    />
    <path
      d="M34,27c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S37.9,27,34,27z M34,39c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S36.8,39,34,39z"
      fill={color}
    />
    <path
      d="M34,23c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S40.1,23,34,23z M34,43c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S39,43,34,43z"
      fill={color}
    />
    <path
      d="M34,14c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S45,14,34,14z M34,52c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S43.9,52,34,52z"
      fill={color}
    />
  </StyledSvg>
);
