import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const BushingIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 20"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <rect width="7" height="30" x="0" y="0" fill="currentColor" />
    <rect width="25" height="20" x="6" y="5" fill="currentColor" />
    <rect width="7" height="30" x="38" y="0" fill="currentColor" />
    <rect width="20" height="20" x="44" y="5" fill="currentColor" />
  </StyledSvg>
);
