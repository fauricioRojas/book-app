import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const WashedIcon: FC<ICommonIconProps> = ({
  color,
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
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      fill={color}
      d="M8 20a11.014 11.014 0 0 0 .093 1.36A7.004 7.004 0 0 1 4 15c0-3.551 5.576-10.8 6.211-11.615A1 1 0 0 1 11 3a1 1 0 0 1 .79.386 65.37 65.37 0 0 1 2.853 4.023C11.869 10.728 8 16.062 8 20ZM19.731 6.318a1.032 1.032 0 0 0-1.462 0C17.422 7.226 10 15.323 10 20a9 9 0 0 0 18 0c0-4.677-7.422-12.774-8.269-13.682Z"
    />
  </StyledSvg>
);
