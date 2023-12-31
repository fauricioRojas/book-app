import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const CancelIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 1 1 13M1 1l12 12"
    />
  </StyledSvg>
);
