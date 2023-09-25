import { FC } from 'react';

import { type CommonIconProps, StyledSvg } from '.';

export const PetrolPumpIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  // <StyledSvg
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox="0 0 100 100"
  //   width={width}
  //   height={height}
  //   $ml={ml}
  //   $mr={mr}
  //   $isClickable={pointer || !!props.onClick}
  //   {...props}
  // >
  //   <path
  //     d="M22.917 12.5a4.158 4.158 0 0 0-4.167 4.167v66.666c0 2.084 2.083 4.167 4.167 4.167h37.5c2.083 0 4.166-2.083 4.166-4.167V62.5h2.084c2.083 0 2.083 2.083 2.083 2.083v8.334c0 4.166 2.083 6.25 6.25 6.25s6.25-2.084 6.25-6.25V50c0-4.167-8.333-8.333-8.333-12.5V25H68.75l-4.167-4.167v-4.166a4.158 4.158 0 0 0-4.166-4.167zm4.166 8.333H56.25V37.5H27.083zm37.5 12.5h4.167v6.25c0 4.167 8.333 8.334 8.333 12.5v20.834C77.083 75 75 75 75 75s-2.083 0-2.083-2.083V62.5c0-2.083-2.084-4.167-4.167-4.167h-4.167z"
  //     fill={color}
  //   />
  // </StyledSvg>

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
