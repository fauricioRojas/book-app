import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const LinedUpAndBalancedIcon: FC<ICommonIconProps> = ({
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
      fill="none"
      stroke={color}
      d="M10.5 6.5h11.074M10.5 26.5h4.89m1.141 0H21.5m-5.5-.625V6.5"
    />
    <path
      fill={color}
      d="M8 3h2c.554 0 1 .39 1 .875v5.25c0 .485-.446.875-1 .875H8c-.554 0-1-.39-1-.875v-5.25C7 3.39 7.446 3 8 3zm0 20h2c.554 0 1 .39 1 .875v5.25c0 .485-.446.875-1 .875H8c-.554 0-1-.39-1-.875v-5.25C7 23.39 7.446 23 8 23zM22.326 2.923l1.991.184c.552.051.96.48.916.963l-.483 5.228c-.044.483-.524.83-1.076.78l-1.992-.185c-.551-.05-.96-.48-.915-.963l.483-5.228c.044-.482.524-.83 1.076-.779zM22 23h2c.554 0 1 .39 1 .875v5.25c0 .485-.446.875-1 .875h-2c-.554 0-1-.39-1-.875v-5.25c0-.485.446-.875 1-.875zm-4.5 3.5A1.5 1.5 0 0 1 16 28a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 16 25a1.5 1.5 0 0 1 1.5 1.5z"
    />
  </StyledSvg>
);
