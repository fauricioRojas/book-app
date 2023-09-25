import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const BullIcon: FC<CommonIconProps> = ({
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
      fill={color}
      d="M46.6 14.3c-.2-.2-.3-.5-.3-.7-.1-.3-.1-.8.1-1.3 0 0 .6-1.4-.8-2.8-.5-.5-1.1-.8-1.7-1.1-1.3-.4-3.7-.9-4.1 1.4 0 .3-.3.5-.6.6-.4.1-.9.1-1.4.2-.4 0-.7-.1-1-.3-1.7-1.2-8.2-5.6-9.6.9 0 0-.7 3-14.4-.8-.1 0-.2-.1-.3-.1-.4-.2-2-.6-3.8.1-.3.1-.5.2-.8.3-.1 0-.2.1-.3.1-.3.1-.6.2-.8.3-.5 0-.8.1-.8.1s-3.7.7-4.8 4C.2 18.5.5 30.8.5 30.8v.1s-1.2 2.3.3 4.9c0 0 .3.7.1 1 0 0 1.2.2.9-.4 0 0 .2-1.1-.2-1.4 0 0-.1-.7.1-1l.1-.1c.4-.1 0-2.8-.3-3.3s-.4-.9-.4-.9-.1-13.8 1.5-15l.6-.4c-.3.7-.6 1.4-.7 2.2-.3 2.3-.5 5.6.8 7.8 0 0 .7.7-.4 3.5-.2.5-.3 1-.4 1.5 0 .4 0 1 .2 1.6l.1 6.8S2.7 39.6 4 40c0 0 1.3.5 2.3.2.2-.1.4-.3.2-.5-.1-.2-.3-.4-.5-.7-.1-.1 0-1-.7-1.2 0 0-.3-3-.1-3.3 0 0 .2-.3.3-.1 0 0 .4 3.6 1.9 4.4 0 0 .3.8 1.2.9 0 0 2.4.2 1.6-.8l-.8-1S6.1 35 8.2 29.1h.1c0 .7 0 2.3 1.3 2h.2c.3 0 1.5-.4.7-4.4 0 0-.1-.5.5-.1 0 0 5.3 4.6 5.8 5.3 0 0 1.2 1.8 1.8-.3v-.1c.1-.2.4-1 1.1-.7 0 0 .6-.1 1.3-1.3l.3-.3c.7-.6 3.1-2.6 4.3-2 0 0 1.9 1.3 2.7 1.2.1 0 .2 0 .2.1 0 .8.2 3.7.6 4.9.1.2.1.4.1.6-.1 1-.2 4.1.7 4.5.1.1.3.2.3.3.1.5.6 1.5 2.8.7.7-.2 1-1 .6-1.7-.1-.1-.1-.2-.2-.3 0 0-2-2.2-1.1-5.1v-.2c0-.6.3-2.9 2.7-1.6.2.1 1.3.4 1.6-.7 0-.1.1-.1.1-.1.4-.1 1.5-.5 1.4-1 0-.1.1-.1.1-.1.3-.1 1.1-.3 1.3-1.3 0-.1.1-.1.1-.1.3-.1 1-.5.8-2.5 0-.1 0-.2.1-.2.2-.1.7-.4 1-1.1 0-.1.1-.1.2-.1.5.1 2.6.1 3.1-4.1 0-.1.1-.2.2-.2.3-.1 1-.3 1.3.1 0 0 1.3 1.6 1.6-1.9v-.1c.1-.3.2-1.1-1.3-2.9z"
    />
  </StyledSvg>
);
