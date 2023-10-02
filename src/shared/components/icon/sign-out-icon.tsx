import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const SignOutIcon: FC<CommonIconProps> = ({
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
    <path
      fill={color}
      d="M15.293 9.11572C14.9045 8.72577 14.9051 8.09493 15.2943 7.70573V7.70573C15.6841 7.31599 16.3159 7.31599 16.7057 7.70573L20.5455 11.5455C20.7965 11.7965 20.7965 12.2036 20.5455 12.4546L16.7057 16.2944C16.3159 16.6841 15.6841 16.6841 15.2943 16.2944V16.2944C14.9051 15.9052 14.9045 15.2743 15.293 14.8844L17.17 13L10 13C9.44772 13 9 12.5523 9 12V12C9 11.4478 9.44772 11 10 11L17.17 11L15.293 9.11572Z"
    />
    <path
      fill={color}
      d="M5 2.00005C3.89543 2.00005 3 2.89548 3 4.00005L3 20C3 21.1046 3.89543 22 5 22H11C11.5523 22 12 21.5523 12 21V21C12 20.4478 11.5523 20 11 20H5L5 4.00005L11 4.00005C11.5523 4.00005 12 3.55233 12 3.00005V3.00005C12 2.44776 11.5523 2.00005 11 2.00005L5 2.00005Z"
    />
  </StyledSvg>
);
