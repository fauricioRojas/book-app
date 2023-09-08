import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const EngineAirFilterIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 8.467 8.467"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M.926.53a.264.264 0 0 0-.264.264v6.879c0 .147.118.265.264.265H7.54a.264.264 0 0 0 .265-.265V.794A.264.264 0 0 0 7.54.53zm.397.529h2.513c.073 0 .132.059.132.132v.265H1.191V1.19c0-.073.059-.132.132-.132zm3.307 0h2.513c.074 0 .133.059.133.132v.265H4.498V1.19c0-.073.06-.132.132-.132zm-3.44.661h2.778v.265H1.191zm3.308 0h2.778v.265H4.498zm-3.307.53h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.265H1.191zm3.307 0h2.778v.265H4.498zm-3.307.53h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.528h2.777v.265H1.191zm3.307 0h2.778v.265H4.498zm-3.307.53h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.264H1.191zm3.307 0h2.778v.264H4.498zm-3.307.529h2.777v.264a.132.132 0 0 1-.132.132H1.323a.132.132 0 0 1-.132-.132zm3.307 0h2.778v.264a.132.132 0 0 1-.133.132H4.63a.132.132 0 0 1-.132-.132z"
    />
  </StyledSvg>
);
