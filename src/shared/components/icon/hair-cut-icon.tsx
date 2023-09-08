import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const HairCutIcon: FC<ICommonIconProps> = ({
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
      d="M52.5 5.8c-.6-1.4-1.9-2.1-3.2-1.8l-2.8.7-6.4 1.5c.3 1.2.2 2.4-.3 3.5l-.4.8 7.4-1.7.2 1.1-8.4 2-.9 1.8 9.7-2.3.3 1.5-11 2.6-.9 1.8 12.2-3 .3 1.2-12.7 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.7-3 .3 1.4-12.7 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.7-3 .3 1.2-12.7 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.7-3 .3 1.5-12.7 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.1-12.7 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.5-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.2-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.5-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.2-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.5-12.6 3c-.4.1-.6.5-.5.9.1.4.4.6.7.6h.2l12.6-3 .3 1.1-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.6-3 .3 1.5-12.6 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.5-3 .3 1.2-12.5 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.5-3 .3 1.5-12.5 3c-.4.1-.6.5-.5.9.1.4.5.7.8.6l12.5-3 .3 1.2-12.5 3c-.4.1-.6.5-.5.9l.6 2.5c.1.2.2.4.3.5.2.1.3.1.5.1L58.1 59l3.1-.7c1.3-.3 2.1-1.6 2-3.1-.4-17.5-4.3-33.8-10.7-49.4zm7.5 44c-.4 0-.7-.3-.7-.7-1.6-18-8.5-36.1-8.6-36.3v-.1c-.1-.4.1-.7.4-.9.4-.2.7.1.9.4.1.2 7 18.5 8.7 36.8 0 .4-.3.8-.7.8z"
    />
    <path
      fill={color}
      d="M39.1 6.1c-.1-.1-.1-.3-.2-.4-.5-1.3-1.4-2.4-2.7-3-.5-.2-1-.1-1.3.4L19.1 29.8 4.4 3.3c-.2-.5-.8-.6-1.2-.4C1.9 3.4.9 4.5.4 5.8c-.5 1.3-.5 2.7.1 4.1l8.1 16.5c2.2 3.9 4.4 7.7 6.5 11.3l.1.1-3.5 7.2c-3.2-.4-6.3 1.4-7.7 4.4-.8 1.8-.9 3.9-.2 5.7.7 1.9 2.1 3.4 3.9 4.2 1 .4 2 .7 3.1.7.9 0 1.8-.2 2.6-.5 1.9-.7 3.4-2.1 4.2-3.9 1.3-2.8.7-6.1-1.5-8.3.6-1.2 1.4-2.7 2.7-4.5 1.5 2.1 2.4 3.9 3.1 5.3-2.2 2.1-2.9 5.4-1.7 8.3 1.2 2.9 4 4.6 6.9 4.6 1 0 1.9-.2 2.9-.6 3.8-1.6 5.6-6 4-9.8-1.3-3-4.3-4.9-7.6-4.6l-3.7-8.1c2.8-3.9 4.8-7.4 7.2-11.6l4.7-8.9.9-1.8.9-1.8.9-1.8.8-1.4.4-.8c.8-1.2.9-2.5.6-3.7zM10.7 56.8c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2c.1 2.3-1.8 4.2-4.2 4.2zm8.2-19.9c-.6 0-1-.5-1-1 0-.3.1-.5.3-.7.2-.2.5-.3.8-.3.6 0 1 .5 1 1s-.6 1-1.1 1zm8.3 12.3c2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2S23 55.7 23 53.4c-.1-2.3 1.8-4.2 4.2-4.2z"
    />
  </StyledSvg>
);
