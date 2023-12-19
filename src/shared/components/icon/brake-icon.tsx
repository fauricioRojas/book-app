import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const BrakeIcon: FC<CommonIconProps> = ({
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
      d="M4.233 1.587a2.646 2.646 0 0 0-2.646 2.646 2.646 2.646 0 0 0 2.646 2.646A2.646 2.646 0 0 0 6.88 4.233a2.646 2.646 0 0 0-2.646-2.646zm-.397.794h.794v1.323l-.132 1.19h-.53l-.132-1.19zm0 3.043h.794v.661h-.794z"
      fill="currentColor"
    />
    <path
      d="M2.077 290.12a.132.132 0 0 0-.08.033 3.443 3.443 0 0 0-.005 5.225.132.132 0 1 0 .172-.2 3.177 3.177 0 0 1 .005-4.824.132.132 0 0 0-.092-.234zm4.312-.002a.132.132 0 0 1 .08.033 3.443 3.443 0 0 1 .006 5.225.132.132 0 1 1-.173-.2 3.177 3.177 0 0 0-.004-4.824.132.132 0 0 1 .091-.234z"
      transform="translate(0 -288.533)"
      fill="currentColor"
    />
  </StyledSvg>
);
