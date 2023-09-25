import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const SadEmojiIcon: FC<CommonIconProps> = ({
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
    fill="none"
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
      fillRule="evenodd"
      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M9 8C9.55228 8 10 8.44772 10 9V10C10 10.5523 9.55228 11 9 11 8.44772 11 8 10.5523 8 10V9C8 8.44772 8.44772 8 9 8zM15 8C15.5523 8 16 8.44772 16 9V10C16 10.5523 15.5523 11 15 11 14.4477 11 14 10.5523 14 10V9C14 8.44772 14.4477 8 15 8zM16.6207 16.8761C16.1879 17.2192 15.559 17.1464 15.2159 16.7136 14.6898 16.0497 13.7308 15.2785 12.6128 15.0608 11.5852 14.8607 10.2405 15.0905 8.74426 16.7599 8.37564 17.1711 7.74342 17.2057 7.33215 16.8371 6.92089 16.4685 6.88631 15.8363 7.25493 15.425 9.15514 13.3049 11.1848 12.7452 12.9951 13.0977 14.7151 13.4326 16.058 14.5562 16.7833 15.4713 17.1263 15.9041 17.0536 16.5331 16.6207 16.8761z"
      clipRule="evenodd"
    />
  </StyledSvg>
);
