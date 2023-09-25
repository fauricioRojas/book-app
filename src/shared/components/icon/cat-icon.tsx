import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const CatIcon: FC<CommonIconProps> = ({
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
      d="M18.5 8c1 0 3.5 0 3.5-2.5 0-.66-.61-1.09-1.16-1.48a4 4 0 0 1-.49-.38 3.57 3.57 0 0 1-.35-.47C19.65 2.65 19.22 2 18.5 2c-.16 0-.5-.73-.5-1.5a.5.5 0 0 0-.5-.5c-.88 0-1.9 1.41-2.36 2.13a4.22 4.22 0 0 0-1.6 1.66 6.71 6.71 0 0 0-.37 1.78 4.7 4.7 0 0 1-.53 2.08l-3 3C8.63 11.66 6 15 6 18a17.8 17.8 0 0 0 .79 5C4.92 22.73 4 21.6 4 19.5a9 9 0 0 1 1.1-3.67A7.31 7.31 0 0 0 6 13c0-1.52-.15-3-2-3a1.8 1.8 0 0 0-2 2 .5.5 0 0 0 1 0c0-.74.26-1 1-1s1 .09 1 2a6.75 6.75 0 0 1-.81 2.41A9.9 9.9 0 0 0 3 19.5C3 22.4 4.6 24 7.5 24h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.35-.85l1-1a2.85 2.85 0 0 0 .61-3.24A2.87 2.87 0 0 0 11.5 15a.5.5 0 0 1 0-1 3.78 3.78 0 0 1 3.18 2.52 3.85 3.85 0 0 1-.5 4 .5.5 0 0 0 .12.73 1.5 1.5 0 0 1 .7 1.25v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a1.5 1.5 0 0 0-1.5-1.5H18v-4.5a14.25 14.25 0 0 0-.52-3.43A12.89 12.89 0 0 1 17 10c0-2 .73-2 1.5-2Z"
    />
  </StyledSvg>
);
