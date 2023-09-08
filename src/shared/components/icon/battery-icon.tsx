import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const BatteryIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 1024 1024"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill={color}
      d="M832 201.82c0-6.34-5.16-11.5-11.5-11.5l-55-.01c-6.34 0-11.5 5.16-11.5 11.5v58.5h-92.5v-93.92c0-25.68-20.89-46.58-46.57-46.58H408.07c-25.68 0-46.57 20.9-46.57 46.58v93.92H269v-58.5c0-6.34-5.16-11.5-11.5-11.5l-53 .01c-6.34 0-11.5 5.16-11.5 11.5v58.49h-65v90h768v-90h-64v-58.49zm-430.5-35.43c0-3.63 2.95-6.58 6.57-6.58h206.86c3.62 0 6.57 2.95 6.57 6.58v93.92h-220v-93.92zM865 390.31H159v423.88h-31v90h768v-90h-31V390.31zM404.64 512.25v40H351.3v53.33h-40v-53.33h-53.33v-40h53.33v-53.33h40v53.33h53.34zm361.39 40H619.36v-40h146.67v40z"
    />
  </StyledSvg>
);
