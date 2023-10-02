import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const CarburetorIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 32 32"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M8 22H7v2H4V11h3v2h5l4 2 4-2h5v-2h3v13h-3v-2h-1l-8-2z"
      fill={color}
    />
    <path
      d="M24 22.52V27c0 1.66-1.34 3-3 3H11c-1.66 0-3-1.34-3-3v-4.48l8-2 8 2zM14.5 2v3H11v3h1v4.438l4 2 4-2V8h1V5h-3.5V2h-3z"
      fill={color}
    />
  </StyledSvg>
);
