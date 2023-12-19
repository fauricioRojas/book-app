import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ArrowLeftIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 14"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
    />
  </StyledSvg>
);
