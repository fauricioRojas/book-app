import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const CarFuseIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 128 128"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M122 2v70l-8 12H14L6 72V2zM50 84v33l-9 9H27l-9-9V84M78 84v33l9 9h14l9-9V84M18 116.1h32M78 116.1h32M6 19h116M15 84V19M113 84V19M84 84V19M44 84V19"
    />
    <circle
      cx="30"
      cy="70"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="4"
    />
    <circle
      cx="98"
      cy="70"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="4"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M61.1 43.6s-4.4-6.7 2.3-11.1 11.1 2.3 11.1 2.3L83.9 49m-39.4 6.3 8 13.8s4 6.9 10.9 2.9 2.9-10.9 2.9-10.9l-2.9-5"
    />
  </StyledSvg>
);
