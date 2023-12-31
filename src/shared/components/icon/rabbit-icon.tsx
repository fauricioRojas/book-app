import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const RabbitIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 66 66"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M44.8,33c-3-2.4-3.9-4.8-4-6.4c-0.1-1,0.1-2.1,0.4-3.1C35.5,23.2,13,23.1,8.2,39c-2,6.6-2,11-1.2,14
        c-2.5,0.2-8,1.5-5.2,5.3c1.2,1.6,5,0.2,7.7-1c1.4,1.2,2.8,1.5,2.8,1.5s17.3,2.6,23.5,1.8c1.1-0.1,1.6-1.5,0.8-2.3
        c-0.2-0.2-0.4-0.3-0.6-0.5c0,0,0,0,0,0c0,0,0,0,0,0c-0.8-0.5-2.8-1-4.4-1.3c-1.5-0.3-2.5-1.7-2.4-3.2c0.3-3.2-0.1-9.2-5.8-12.9
        c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c6.2,4,6.6,10.4,6.3,13.9c-0.1,1,0.6,1.9,1.6,2.1c1,0.2,2.6,0.6,3.8,1
        c0-0.1,0-0.1,0-0.2c0.5-1.4,1.4-2.9,2.5-0.6c0.6,1.2,1,2,1.3,2.6c0.4,0.9,1.2,1.6,2.2,1.9c0.2,0.1,0.4,0.1,0.6,0.1l6.6-0.1
        c1,0,1.9-0.9,1.8-1.9c0-0.4-0.2-0.7-0.6-0.8c-0.5-0.1-1.2-0.3-2-0.3c-1.2-0.1-2.4-0.7-3-1.8c-1.2-2.1,0.2-5.9,4.7-10.1
        c4.1-3.7,5.8-6.2,6.5-7.7c-0.1,0-0.2,0-0.4,0C52.3,37.5,48.7,36,44.8,33z"
      fill="currentColor"
    />
    <path
      d="M63.3,26.8l-3.3-4.1c-2.6-3.1-6.7-4.8-10.6-3.9c-0.3,0.1-0.5,0.1-0.8,0.2c-5.6-6.1-10.8-7.3-13-7.5c-0.6-0.1-1,0.5-0.7,1
        c0.8,1.7,2.3,4.8,2.7,5.6c1.6,2.9,4.9,3.7,6.4,3.9c-2.3,2.7-2.4,6.5,1.9,9.8c9.9,7.6,15,2.5,15,2.5C68.5,33,63.3,26.8,63.3,26.8z
        M57,27c-0.6,0.2-1.7,0.4-2.8,0.1c-1.5-0.6-2.5-1.6-2.3-2.3c0.3-0.7,1.7-0.8,3.2-0.2c1.1,0.4,1.7,1.3,2.1,1.9
        C57.3,26.6,57.2,26.9,57,27z"
      fill="currentColor"
    />
    <path
      d="M49.1,17.3c0.5-0.1,1-0.2,1.5-0.2c-1-1.4-1.6-3-1.9-4.7c-0.9-5.5-5.1-6.8-6.6-7.1c-0.3-0.1-0.7,0.1-0.8,0.4
        c-0.8,1.9-0.2,4.2,1,6.5C44.4,13.3,46.7,14.9,49.1,17.3z"
      fill="currentColor"
    />
  </StyledSvg>
);
