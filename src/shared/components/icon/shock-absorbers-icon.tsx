import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const ShockAbsorbersIcon: FC<CommonIconProps> = ({
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
    enableBackground="new 0 0 50 50"
    viewBox="0 0 50 50"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M28.2893 28.7154c-.09 0-.19-.01-.28-.01v12.95h6.72v-12.95c-.09 0-.1899.01-.28.01H28.2893zM32.8887 44.0211c.329-.2303.6143-.5189.8094-.8701h-4.6565c.1951.3513.4803.6398.8094.8702-.725.4894-1.2028 1.3185-1.2028 2.2572 0 1.5007 1.2209 2.7217 2.7217 2.7217 1.5008 0 2.7217-1.2209 2.7217-2.7217C34.0916 45.3395 33.6138 44.5105 32.8887 44.0211zM31.3699 47.9113c-.9005 0-1.633-.7325-1.633-1.633 0-.9005.7325-1.633 1.633-1.633.9005 0 1.633.7325 1.633 1.633C33.0029 47.1788 32.2704 47.9113 31.3699 47.9113zM20.1491 44.0211c.329-.2303.6143-.5189.8094-.8702h-4.6566c.1951.3513.4803.6398.8094.8702-.725.4894-1.2028 1.3185-1.2028 2.2572 0 1.5007 1.2209 2.7217 2.7216 2.7217 1.5008 0 2.7217-1.2209 2.7217-2.7217C21.3519 45.3396 20.8741 44.5106 20.1491 44.0211zM18.6302 47.9113c-.9005 0-1.633-.7325-1.633-1.633 0-.9005.7325-1.633 1.633-1.633.9005 0 1.6331.7325 1.6331 1.633C20.2633 47.1788 19.5308 47.9113 18.6302 47.9113zM15.5493 28.7154c-.09 0-.19-.01-.28-.01v12.95h6.72v-12.95c-.09 0-.19.01-.28.01H15.5493zM34.6414 7.4041h-.7021c-.1722-.5905-.5463-1.0908-1.038-1.4351.7176-.4906 1.1902-1.3144 1.1902-2.2473C34.0916 2.2209 32.8707 1 31.3699 1c-1.5007 0-2.7217 1.2209-2.7217 2.7217 0 .9327.4725 1.7563 1.1898 2.2469-.4923.3443-.8667.8448-1.0389 1.4355h-.6909c-.4516 0-.8229.3713-.8229.8129v17.9938c0 .5519.4516 1.0035 1.0035 1.0035h6.1619c.5519 0 1.0035-.4516 1.0035-1.0035V8.217C35.4543 7.7755 35.083 7.4041 34.6414 7.4041zM31.3699 5.3547c-.9005 0-1.633-.7325-1.633-1.633 0-.9005.7325-1.6331 1.633-1.6331.9005 0 1.633.7325 1.633 1.6331C33.0029 4.6221 32.2704 5.3547 31.3699 5.3547zM21.9018 7.4041h-.702c-.1722-.5905-.5464-1.0909-1.038-1.4351.7176-.4906 1.1902-1.3144 1.1902-2.2473C21.3519 2.2209 20.131 1 18.6302 1c-1.5007 0-2.7216 1.2209-2.7216 2.7217 0 .9327.4725 1.7563 1.1898 2.2469-.4923.3443-.8667.8448-1.0389 1.4355h-.6908c-.4517 0-.8229.3713-.8229.8129v17.9938c0 .5519.4516 1.0035 1.0035 1.0035h6.1619c.5519 0 1.0036-.4516 1.0036-1.0035V8.217C22.7147 7.7755 22.3434 7.4041 21.9018 7.4041zM18.6302 5.3547c-.9005 0-1.633-.7325-1.633-1.633 0-.9005.7325-1.6331 1.633-1.6331.9005 0 1.6331.7325 1.6331 1.6331C20.2633 4.6221 19.5308 5.3547 18.6302 5.3547z"
      fill={color}
    />
  </StyledSvg>
);
