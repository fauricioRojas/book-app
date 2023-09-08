import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BallJointsIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 64 64"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="m4,24v-2c0-1.10004.90002-2,2-2h3v6h-3c-1.09998,0-2-.90002-2-2Zm55-12h-3.31c-1.47003,0-2.71002,1.04999-2.96002,2.51001l-.57996,3.48999h-2.15002c-1.09998,0-2,.89996-2,2v6c0,1.09998.90002,2,2,2h2.15002l.57996,3.5c.25,1.45001,1.48999,2.5,2.96002,2.5h3.31c.54999,0,1-.45001,1-1V13c0-.54999-.45001-1-1-1Zm-13,8H11v6h35v-6Zm12,18h-3v6h3c1.09998,0,2-.90002,2-2v-2c0-1.10004-.90002-2-2-2Zm-44-2h-2.15002l-.57996-3.48999c-.25-1.46002-1.48999-2.51001-2.96002-2.51001h-3.31c-.54999,0-1,.45001-1,1v20c0,.54999.45001,1,1,1h3.31c1.47003,0,2.71002-1.04999,2.96002-2.5l.57996-3.5h2.15002c1.09998,0,2-.90002,2-2v-6c0-1.10004-.90002-2-2-2Zm4,8h35v-6H18v6Z"
    />
  </StyledSvg>
);
