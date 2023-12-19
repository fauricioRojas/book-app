import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const PillsBottleIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 68"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M43.07 66.15c-.53.16-1.09.24-1.67.24H8.13c-3.39 0-6.14-2.75-6.14-6.14v-1.49h34.51c.33.75.73 1.47 1.18 2.15.15.25.32.51.47.72 1.04 1.46 2.3 2.73 3.74 3.74.24.18.48.34.66.45C42.72 65.93 42.89 66.04 43.07 66.15zM1.99 28.57v28.19h33.76c-.46-1.52-.7-3.11-.7-4.74 0-7.71 5.33-14.2 12.49-15.99v-7.46H1.99zM33.57 44.67c.47.27.64.88.36 1.36l-1.73 3.01c-.28.48-.89.65-1.37.37l-3.27-1.88v3.62c0 .55-.44 1-1 1h-3.47c-.56 0-1-.45-1-1v-3.68l-3.36 1.94c-.48.28-1.09.11-1.36-.37l-1.74-3.01c-.28-.48-.12-1.09.36-1.36l3.31-1.91-3.31-1.92c-.48-.27-.64-.88-.37-1.36l1.75-3.01c.27-.48.88-.65 1.36-.37l3.36 1.94v-4.02c0-.55.44-1 1-1h3.47c.56 0 1 .45 1 1v3.96l3.27-1.88c.48-.28 1.09-.11 1.37.37l1.73 3.01c.28.48.12 1.09-.36 1.36l-3.31 1.92L33.57 44.67zM47.54 25.09v1.48H1.99v-1.48c0-3.4 2.75-6.15 6.14-6.15h2.8v-3.05h27.68v3.05h2.79C44.79 18.94 47.54 21.69 47.54 25.09z"
      fill="currentColor"
    />
    <path
      d="M38.38 45.98l19.21 19.19c-1.84.85-3.89 1.33-6.06 1.33-2.91 0-5.61-.86-7.88-2.35-.2-.12-.39-.25-.58-.39-1.27-.9-2.39-2.02-3.29-3.29-.14-.19-.27-.39-.39-.59-1.49-2.26-2.34-4.96-2.34-7.86C37.05 49.87 37.52 47.82 38.38 45.98zM66.01 52.02c0 2.16-.47 4.21-1.32 6.05l-19.2-19.2c1.84-.86 3.89-1.33 6.05-1.33 2.89 0 5.59.85 7.86 2.34.2.13.4.26.59.4 1.27.91 2.39 2.02 3.29 3.29.14.19.27.39.39.59C65.15 46.42 66.01 49.12 66.01 52.02zM39.4 44.16l20.01 19.99c.2-.12.39-.25.58-.39 1.27-.9 2.39-2.02 3.29-3.29.14-.19.27-.39.39-.59l-20-20c-.2.13-.4.26-.59.4-1.27.91-2.39 2.02-3.29 3.29C39.65 43.76 39.52 43.96 39.4 44.16zM41.71 1.5H7.83c-1.49 0-2.7 1.21-2.7 2.7v6.98c0 1.49 1.21 2.7 2.7 2.7h33.88c1.49 0 2.7-1.21 2.7-2.7V4.2C44.42 2.71 43.21 1.5 41.71 1.5zM11.69 10.79h-3V4.6h3V10.79zM17.53 10.79h-3V4.6h3V10.79zM23.36 10.79h-3V4.6h3V10.79zM29.19 10.79h-3V4.6h3V10.79zM35.02 10.79h-3V4.6h3V10.79zM40.85 10.79h-3V4.6h3V10.79z"
      fill="currentColor"
    />
  </StyledSvg>
);
