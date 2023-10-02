import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const PickupIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 24 24"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <circle
      cx="6.5"
      cy="15.5"
      r="2.75"
      fill={color}
    />
    <circle
      cx="17.5"
      cy="15.5"
      r="2.75"
      fill={color}
    />
    <path
      d="M2.823 16.241A3.751 3.751 0 0 1 6.5 11.75a3.751 3.751 0 0 1 3.675 4.5h3.65a3.751 3.751 0 0 1 3.675-4.5 3.751 3.751 0 0 1 3.677 4.491c.399-.04.774-.217 1.06-.504.329-.328.513-.773.513-1.237v-2.234a2.75 2.75 0 0 0-2.409-2.729l-1.86-.233a.249.249 0 0 1-.16-.087l-2.402-2.846a1.749 1.749 0 0 0-1.337-.621H9.539a1.75 1.75 0 0 0-1.75 1.723L7.762 9.25H3A1.75 1.75 0 0 0 1.25 11v3.5c0 .907.69 1.653 1.573 1.741ZM11.5 12.75H13a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm.25-5.5V10h-2.5l.039-2.504a.25.25 0 0 1 .25-.246h2.211Zm1.5 0h1.332a.25.25 0 0 1 .191.089L17.019 10H13.25V7.25Z"
      fill={color}
    />
  </StyledSvg>
);
