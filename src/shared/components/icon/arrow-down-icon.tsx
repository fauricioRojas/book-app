import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ArrowDownIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 48 48"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M14.83 16.42 24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"
    />
  </StyledSvg>
);
