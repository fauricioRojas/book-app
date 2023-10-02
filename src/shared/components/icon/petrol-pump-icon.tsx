import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const PetrolPumpIcon: FC<CommonIconProps> = ({
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
    {...props}
  >
    <path
      d="M40.8 6.9c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l2.2 2.2c-.3.7-.5 1.4-.5 2.2 0 2.5 1.7 4.6 4 5.3V38c0 1.1-.9 2-2 2s-2-.9-2-2v-1.4c0-3.2-2.6-5.8-5.8-5.8V7.7c0-3.6-2.9-6.5-6.5-6.5H12.6C9 1.2 6.1 4.1 6.1 7.7v37.6c-1.9 0-3.5 1.5-3.5 3.5h35.8c0-1.9-1.5-3.5-3.5-3.5h-.5V33.9c1.5 0 2.8 1.2 2.8 2.8V38c0 2.8 2.3 5 5 5 2.8 0 5-2.3 5-5V14.1c.2-1.1-.4-1-6.4-7.2zm-29.7.8c0-.9.7-1.5 1.6-1.5H28c.8 0 1.5.7 1.5 1.5v11.8H11.1V7.7z"
      fill={color}
    />
  </StyledSvg>
);
