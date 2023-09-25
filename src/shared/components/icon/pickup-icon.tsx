import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const PickupIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 50 50"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    transform="scale(1.25)"
    {...props}
  >
    <path
      d="M4.8 30.7h1.3c0-.3-.1-.7-.1-1 0-3.8 2.9-6.9 6.6-6.9 3.6 0 6.5 3.1 6.5 6.9 0 .3 0 .7-.1 1h15.8c0-.3-.1-.7-.1-1 0-3.8 2.9-6.9 6.5-6.9s6.6 3.1 6.6 6.9v.3c.8-.7 1.3-1.8 1-3-.3-1.4-.7-2.7-1.2-4-.2-.5-.6-1-1.1-1.3-2.1-1.4-6.9-2-7.9-2-.2 0-.4 0-.6-.1-5-3.1-4.8-3-5.3-3.1-4.7-1-9.4-1.4-14.5-1.1-1 .1-1.8.8-1.9 1.9l-.4 3.5c-2-.1-8.7-.4-11.8-.5-1.7-.1-3.1 1.2-3.4 3-.1.5.3 3.7 1.6 6 .8.9 1.6 1.4 2.5 1.4zm27.7-12.2c.2.1 1 .6 3.6 2.2-.2.1.3 0-8.7 0l-.3-3.1c1.9.2 3.7.5 5.4.9zm-13.9-.9v-.1c2.2-.1 4.4-.1 6.5 0l.3 3.2h-7.2l.4-3.1z"
      fill={color}
    />
    <path
      d="M17.2 29.7c0-2.7-2-4.9-4.5-4.9S8.1 27 8.1 29.7s2 4.9 4.6 4.9 4.5-2.2 4.5-4.9zm28.7 0c0-2.7-2-4.9-4.6-4.9-2.5 0-4.5 2.2-4.5 4.9s2 4.9 4.5 4.9c2.6 0 4.6-2.2 4.6-4.9z"
      fill={color}
    />
  </StyledSvg>
);
