import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const DogIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 24 24"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="m23.64 3-3.31-.94-.46-.93A2.07 2.07 0 0 0 18 0h-2.16a2.08 2.08 0 0 0-1.74.94C13.14 2.39 12 4.36 12 5.5c0 1.78.72 2.5 2.5 2.5a.5.5 0 0 1 0 1 3.42 3.42 0 0 1-2.75-1 .5.5 0 0 0-.48-.17A9.91 9.91 0 0 1 9.5 8c-2.81 0-4.9.57-6.16 1.62C2.64 9 1 7.42 1 5.5 1 3.15 3.67 2 3.7 2a.5.5 0 0 0-.4-1C3.17 1.1 0 2.49 0 5.5c0 2.32 1.82 4.14 2.66 4.86A3.62 3.62 0 0 0 2 12.5a5.19 5.19 0 0 1-1.13 2.94A3.87 3.87 0 0 0 0 17.5c0 1.39.48 5.86.5 6.05A.5.5 0 0 0 1 24h2c.63 0 1-.77 1-1.49a1.56 1.56 0 0 0-.34-1 1.35 1.35 0 0 0-.66-.44v-2.24a7.5 7.5 0 0 0 3.09-2.25c.39-.46.51-.58.91-.58a10.12 10.12 0 0 1 2 .35 20.36 20.36 0 0 0 4.34.65c.06.14.13.27.2.4A2.81 2.81 0 0 1 14 19a7 7 0 0 1-.45 2.78.5.5 0 0 0 0 .38l.5 1.5a.5.5 0 0 0 .47.34h2.32A1.31 1.31 0 0 0 18 22.57a1.52 1.52 0 0 0-1-1.47c.35-1.19.68-2.19 1-3.08a14.88 14.88 0 0 0 1-4.52v-5A1.5 1.5 0 0 1 20.5 7 3.5 3.5 0 0 0 24 3.5a.5.5 0 0 0-.36-.5Z"
    />
    <path
      fill={color}
      d="M19 21.07V18l-.11.34c-.24.72-.49 1.47-.75 2.31l.18.18a2.55 2.55 0 0 1 .68 1.74 2.63 2.63 0 0 1-.41 1.43H19c.63 0 1-.77 1-1.49a1.56 1.56 0 0 0-.34-1 1.35 1.35 0 0 0-.66-.44ZM5 21.07V18.9a10.14 10.14 0 0 1-1 .57v1a2.31 2.31 0 0 1 .44.41A2.55 2.55 0 0 1 5 22.51 3 3 0 0 1 4.61 24H5c.63 0 1-.77 1-1.49a1.56 1.56 0 0 0-.34-1 1.35 1.35 0 0 0-.66-.44Z"
    />
  </StyledSvg>
);
