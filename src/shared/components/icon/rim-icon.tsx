import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const RimIcon: FC<ICommonIconProps> = ({
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
      d="M5.26 28.45a19.37 19.37 0 0 1 0-8.6c.07-.32.57 0-3.51-1.49A23 23 0 0 0 1.8 30c4.05-1.51 3.54-1.21 3.46-1.55zm5.66-18.56a19.16 19.16 0 0 1 7.57-4.33l-.68-3.71a22.82 22.82 0 0 0-9.95 5.78c3.32 2.79 2.81 2.48 3.06 2.26zm26.17 0c.24.23-.26.52 3-2.26a22.67 22.67 0 0 0-9.95-5.78l-.67 3.7a19.19 19.19 0 0 1 7.62 4.34zm9.21 8.47c-4.09 1.45-3.58 1.17-3.51 1.49a19.37 19.37 0 0 1 0 8.6c-.09.34-.59 0 3.46 1.55a23 23 0 0 0 .05-11.64zm-9.45 19.98a19.29 19.29 0 0 1-7.33 4.11l.67 3.7a22.7 22.7 0 0 0 9.67-5.51c-3.23-2.81-2.75-2.53-3.01-2.3zm-25.7 0c-.26-.23.22-.51-3 2.3a22.76 22.76 0 0 0 9.67 5.51l.67-3.71a18.92 18.92 0 0 1-7.34-4.1zm5.96-8.56a8.43 8.43 0 0 1-1.6-2.78c-9.28 3.55-6.34 2.44-13.11 5a22.41 22.41 0 0 0 4.35 7.2c5.45-4.75 3.12-2.64 10.36-9.42zm-1.64-8.67a9 9 0 0 1 1.59-2.83C9.66 11.69 12 13.74 6.5 9.1a22.55 22.55 0 0 0-4.22 7.34zm6.96-5.95a7.86 7.86 0 0 1 3.15 0c2-9.73 1.36-6.63 2.66-13.75a22.81 22.81 0 0 0-8.48 0c1.3 7.1.7 4.01 2.67 13.75zm8.5 3.12a8.63 8.63 0 0 1 1.6 2.83l13.19-4.67A22.55 22.55 0 0 0 41.5 9.1c-5.5 4.64-3.15 2.59-10.57 9.18zM32.5 27a8.78 8.78 0 0 1-1.5 2.69c-.14.14 4.2 4.21 10.28 9.51a22.86 22.86 0 0 0 4.35-7.28c-.03-.11.66.32-13.13-4.92zm-1.86-5.22a7 7 0 1 0-5.46 9.11 7 7 0 0 0 5.46-9.11zM24 27a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm1.57 5.84a7.86 7.86 0 0 1-3.15 0c-2 9.73-1.36 6.63-2.66 13.75a22.81 22.81 0 0 0 8.48 0c-1.3-7.1-.7-4.01-2.67-13.75z"
      fill={color}
    />
  </StyledSvg>
);
