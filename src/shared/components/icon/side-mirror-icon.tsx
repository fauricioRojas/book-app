import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const SideMirrorIcon: FC<CommonIconProps> = ({
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
      d="M12 24H7v12.18c.67-.26.28-.18 11.17-.18-7.68-7.69-7.57-6.42-6.17-12Z"
      fill={color}
    />
    <path
      d="M39 12H20.13a4 4 0 0 0-3.88 3l-2.93 11.87a2 2 0 0 0 .51 2L21 36h21c5.72-5.72 5-4.66 5-16a8 8 0 0 0-8-8zm1.83 22H22.17l-6.41-6.41 3.11-11.38A3 3 0 0 1 21.76 14H39a6 6 0 0 1 6 6c0 10.55.67 9.16-4.17 14zM1 20v23a4 4 0 0 0 4-4c0-16.28.39-16.28-1.17-17.84A4 4 0 0 0 1 20z"
      fill={color}
    />
    <path
      d="M39 16H21.76a1 1 0 0 0-1 .74L18 27l5 5h17c3.62-3.62 3-2.11 3-12a4 4 0 0 0-4-4Z"
      fill={color}
    />
  </StyledSvg>
);
