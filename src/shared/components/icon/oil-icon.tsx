import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const OilIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 31.819 14.58"
    viewBox="0 0 31.819 14.58"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={!!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="m20.897 6.766-2.062-2.294h-4.058V1.799h3.191V.216H9.941v1.583h2.973v2.673H7.129V2.118L0 0v4.927l6.979 2.077v7.576h14.528l9.838-12.497zM30.863 3.782c0 1.02.956 2.969.956 3.582 0 .489-.234 1.116-.951 1.116h-.02c-.669 0-.951-.604-.951-1.116 0-.613.966-2.562.966-3.582z"
    />
  </StyledSvg>
);
