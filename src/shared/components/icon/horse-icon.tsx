import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const HorseIcon: FC<CommonIconProps> = ({
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
      d="M47.7 12.1s-.7-1.5-1.5-2.2c-.2-.1-.3-.3-.5-.4-.3-.3-.7-.9-.9-1.4-.2-.4-.4-.8-.7-1.1-.2-.2-.5-.4-.8-.8 0 0 .3-.5-.4-.6 0 0 .8-2.1.6-2.6 0 0-1.1 1.7-1.5 1.8 0 0-.2 0-.1-.3 0 0 .3-1.4.1-1.5 0 0-1 1.8-1.5 2 0 0-2.2-.5-2.6.5 0 0-4.8 1.1-8.8 5.8-.8 1-1.9 1.7-3 2.2-1.1.4-2.4.9-3.6 1-.5.1-.9.1-1.4 0-1.2-.1-4.3-.5-7.9-1.4 0 0-1.4-.8-5.4.5 0 0-1.8.4-2.7 1.2-.3.2-.7.4-1 .6C3 15.6 1.3 16.7 1 20l-.9 5.5c0-.2.2-1.1.7-1.8v.6c-.3 1.1-.7 2.8-.8 3.3 0 0 .3-1.2.8-2.1v.7c-.4 1.2-.8 2.7-.8 3.5 0 0 .2-1.2.7-2.5v1.2c-.2 1-.5 2-.4 2.7 0 0 .2-.8.5-1.8 0 .7.1 1.4.2 1.9 0 .1.1.3.1.4-.1.8-.1 1.3-.1 1.5 0 0 .1-.4.2-1 .3.9.7 2.9-.1 4.1 0 0 1.1 0 1.6-.7.1-.1.2-.1.2 0 .2.8.6 2.7.2 4.1 0 0 1.6-.2.3-5 0 0 1.7-3.2 1.8-5.7L5 24.6s1.7 2.6.7 6c0 0-1.4 2.2-.5 2.6l.3 6.2c0 .1 0 .2-.1.4-.2.4-.4 1.2.4 1.8 0 0 .7 1.1 0 1.9 0 0-.7.9.8 1.4 0 0 2.4.3 1.6-.6 0 0-1.3-2.4-1.2-3.4 0 0 0-1.4-.2-1.7 0 0-.3-4.8.6-4.5l.8 4.7s-.2.9.8 1.3c.1 0 .2.1.3.2l.3.4c.1.1.2.3.1.5-.1.4-.2 1.3 1 1.3 0 0 2-.3 1.6-.7 0 0-1-1.3-1.5-1.5 0 0-1-1.1-1.1-2.6 0 0-1.4-4.3.7-7.9l.3-.6c.4-1.1 1.6-4.6 2.3-4.5 0 0 .6.5 1.2-.2.1-.1.3-.2.5-.2.4.1 1.1.3 1.5.5 0 0 2.9 2.4 12.5 2 .1 0 .2.1.2.2-.1 1.3-.5 7.5-.2 8.5l-.8 3.9s-.4.8.7 1.6c.1.1.2.2.2.3.1.3.1.8-.1 1.3 0 0-.1 1.3 1.1 1.5 0 0 2.3.2 1.8-.5 0 0-.6-1.4-1.4-1.7 0 0-.6-.6-.6-1.8l.3-4.1s.1-.6.3 0c0 0-.3 3.2.2 3.3 0 0 1.3.6.9 1.1 0 0-.3.9.5 1.2 0 0 2 .7 2-.2 0 0-.8-1.5-1.5-1.7 0 0-.9-1.4-.8-2.4 0 0-.2-2.2.1-2.5 0 0 .3-.4.3-1.5 0 0 0-5.8 1.1-7.1 0-.1.1-.1.2-.1.4-.2 2.4-1.4 2.5-3.9 0 0-.4-2.2.9-4.5.1-.2.2-.5.3-.7.5-1.5 2.3-6.4 4.2-5 0 0 .4.3.9.2.2 0 .3 0 .5.1.7.3 2.4 1 2.6 1.2 0 0-.2.7 1.1.6 0 0 1.8.2 1.7-1.1-.2-.1.5-.9-.2-1.5zm-5.9-4s.5-.6.9 0c0 0-.4.6-.9 0zM.1 25.5z"
    />
  </StyledSvg>
);
