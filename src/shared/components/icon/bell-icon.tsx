import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const BellIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 20 20"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M17.014709 12.937866c-.646912-.349121-1.050171-1.024963-1.050171-1.760071v-1.168579V7.252686c0-2.783447-1.914673-5.394043-4.494751-6.050232 0 0-.569763-.193237-1.469788-.193237-.896484 0-1.464539.193237-1.464539.193237C5.958008 1.861267 4 4.471863 4 7.25531v2.753906 1.176514c0 .732239-.400208 1.406006-1.043274 1.756287L1 14.007935v2.001282h18v-2L17.014709 12.937866zM8 17.229858c0 .972229.894348 1.760864 2 1.760864s2-.787292 2-1.760864v-.220642H8V17.229858z"
      fill={color}
    />
  </StyledSvg>
);
