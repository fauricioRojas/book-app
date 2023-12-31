import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const CurrencyIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 7c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.2 7.5h.5c1-.1 1.8.7 1.9 1.6s-.7 1.8-1.6 1.9v.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V18h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.8c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-.5c-1 .1-1.8-.7-1.9-1.6s.7-1.8 1.6-1.9v-.5c0-.3.2-.5.5-.5s.5.2.5.5v.6h1c.3 0 .5.2.5.5s-.3.5-.6.5h-1.8c-.4 0-.8.3-.8.8s.4.7.9.7z"
    />
    <path
      fill="currentColor"
      d="M13.7 5.5C12.6 2.1 8.9.2 5.5 1.3S.2 6.1 1.3 9.5c.6 2 2.2 3.6 4.2 4.2h.2c.2 0 .4-.2.5-.4.2-1 .6-2 1.1-2.8C6 10.3 5 9.3 5 8c-.3 0-.5-.2-.5-.5S4.7 7 5 7c0-1.4 1.1-2.5 2.5-2.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1C6.7 5.5 6 6.2 6 7h1.5c.3 0 .5.2.5.5s-.2.5-.5.5H6c0 .8.7 1.5 1.5 1.5h.4c1.3-1.7 3.3-2.9 5.4-3.3.3-.1.5-.4.4-.7 0 .1 0 0 0 0zm9-1.4c-.2-.1-.5 0-.7.2l-.3.7C21 2.7 19 1 16.5 1c-.3 0-.5.2-.5.5s.2.5.5.5c2.1.1 3.8 1.6 4.3 3.6l-1.1-.5c-.3-.1-.5 0-.7.3-.1.2 0 .5.2.6l2 1c.2.1.5 0 .7-.2l1-2c.2-.3.1-.6-.2-.7zM7.5 22c-2.1-.1-3.8-1.6-4.3-3.6l1.1.6c.3.1.6 0 .7-.3.1-.3 0-.6-.3-.7l-2-1c-.2-.1-.5 0-.7.2l-1 2c-.1.3 0 .5.3.7.2.1.5 0 .6-.2l.4-.8c.6 2.3 2.7 4 5.2 4.1.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
    />
  </StyledSvg>
);
