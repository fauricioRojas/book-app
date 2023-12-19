import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const BrakeFluidBottleIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      d="m35 8 2-6h20l2 6M35 9h24v11H35zM38 23s0 4-4 4-4 4-4 4v85c0 10 10 10 10 10h47s10 0 10-10V72h0c0-9-10-18-10-18L60 27c-4 0-4-4-4-4"
    />
    <path
      strokeLinecap="round"
      d="M58 63c6 0 9.9 5.8 10 10 .1 4-4 5.3-4 10s4.1 6 4 10c-.1 4.2-4 10-10 10s-9.9-5.8-10-10c-.1-4 4-5.3 4-10s-4.1-6-4-10c.1-4.2 4-10 10-10z"
      fill="currentColor"
    />
    <path strokeLinecap="square" d="M59 103v4M59 63V52" fill="currentColor" />
    <path
      strokeLinecap="round"
      d="M52 65V52h10s11.5 7.5 11.5 15.5c0 0 0 3.5-1.2 4.5 0 0-2 1.5.5 4.5 1.6 1.9 2.2 4 2.2 6.5s-.6 4.6-2.2 6.5c-2.5 3-.5 4.5-.5 4.5 1.2 1 1.2 4.5 1.2 4.5 0 8-11.5 15.5-11.5 15.5H52v-13"
      fill="currentColor"
    />
  </StyledSvg>
);
