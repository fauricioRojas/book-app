import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const EngineIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.467 8.467"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="currentColor"
      d="M.298 292.006v2.646h.264v-2.646z"
      transform="translate(0 -288.533)"
    />
    <path
      fill="currentColor"
      d="M.364 293.197v.264h.86v-.264z"
      transform="translate(0 -288.533)"
    />
    <path
      fill="currentColor"
      d="M3.35 291.345a.132.132 0 00-.115.064l-.358.597H2.48v2.646h.212c.12 0 .236.04.33.116l.372.297c.094.075.21.116.33.116h2.593c.073 0 .133-.06.132-.132v-2.91a.132.132 0 00-.132-.133h-.794l-.358-.597a.133.133 0 00-.114-.064H3.671zm-1.796.661a.132.132 0 00-.132.132v2.382c0 .073.06.132.132.132h.662v-2.646zm5.954.397l-.397.529h-.397v1.323h.397l.397.53h.396a.265.265 0 00.265-.265v-1.853a.265.265 0 00-.265-.264zM3.274 290.352v.397h.662v.397h.529v-.397h.661v-.397z"
      transform="translate(0 -288.533)"
    />
  </StyledSvg>
);
