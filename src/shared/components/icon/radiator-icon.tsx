import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const RadiatorIcon: FC<CommonIconProps> = ({
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
      d="M1.852 291.444a.53.53 0 00-.53.529v.132h-.66v.53h.66v2.513a.53.53 0 00.53.53h4.763a.53.53 0 00.529-.53v-.132h.661v-.53h-.661v-2.513a.53.53 0 00-.53-.53zm-.132.397h.264v3.44H1.72zm.529 0h.265v3.44h-.265zm.53 0h.264v3.44h-.265zm.528 0h.265v3.44h-.265zm.53 0H4.1v3.44h-.265zm.529 0h.264v3.44h-.264zm.529 0h.264v3.44h-.264zm.529 0h.265v3.44h-.265zm.53 0h.264v3.44h-.265zm.528 0h.265v3.44h-.265zM3.307 290.518v-.662h-.661v.662zM1.852 291.245v-.529h3.572l.661.53z"
      transform="translate(0 -288.533)"
    />
  </StyledSvg>
);
