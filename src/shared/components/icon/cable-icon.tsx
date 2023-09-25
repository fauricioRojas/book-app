import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const CableIcon: FC<CommonIconProps> = ({
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
    viewBox="0 0 68 68"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M35.8,2C22.3,2,11.4,12.9,11.4,26.4v32.9H7.8V66h14.9v-6.7h-3.5v-15c9.4,8.6,23.8,8.6,33.1,0v8.8h2.9V58h2v-4.8h2.9V26.4C60.2,12.9,49.2,2,35.8,2z M20.7,61.3V64H9.8v-2.7H20.7z M13.4,59.3V36c1,2.2,2.2,4.3,3.8,6.2v17.1H13.4z M58.2,51.1h-3.8V26.4c0-10.2-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5c0,10.2,8.3,18.5,18.5,18.5c7.2,0,13.5-4.2,16.5-10.2v6.7c-9,9.9-24.6,9.7-33.3-0.3C6.2,26.8,16.5,4,35.8,4c12.3,0,22.4,10,22.4,22.4V51.1z M52.3,26.4c0,9.1-7.4,16.5-16.5,16.5s-16.5-7.4-16.5-16.5S26.6,9.8,35.8,9.8S52.3,17.3,52.3,26.4z"
      fill={color}
    />
  </StyledSvg>
);
