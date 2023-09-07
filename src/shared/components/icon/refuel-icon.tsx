import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const RefuelIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      d="M22.917 12.5a4.158 4.158 0 0 0-4.167 4.167v66.666c0 2.084 2.083 4.167 4.167 4.167h37.5c2.083 0 4.166-2.083 4.166-4.167V62.5h2.084c2.083 0 2.083 2.083 2.083 2.083v8.334c0 4.166 2.083 6.25 6.25 6.25s6.25-2.084 6.25-6.25V50c0-4.167-8.333-8.333-8.333-12.5V25H68.75l-4.167-4.167v-4.166a4.158 4.158 0 0 0-4.166-4.167zm4.166 8.333H56.25V37.5H27.083zm37.5 12.5h4.167v6.25c0 4.167 8.333 8.334 8.333 12.5v20.834C77.083 75 75 75 75 75s-2.083 0-2.083-2.083V62.5c0-2.083-2.084-4.167-4.167-4.167h-4.167z"
      fill={color}
    />
  </StyledSvg>
);
