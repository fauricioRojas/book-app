import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const TranslateIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 16 16"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M12.03 7.09 12 7h-1l-.03.09L8 15h1.07l.749-2h3.362l.749 2H15l-2.97-7.91zM10.193 12 11.5 8.51 12.807 12h-2.614zM8 3h2V2H6V1H5v1H1v1h6c0 1.605-.908 3.123-2 4.376C4.145 6.393 3.392 5.238 3.115 4H2.101c.288 1.54 1.201 2.943 2.219 4.103-1.489 1.486-3.05 2.451-3.08 2.47l.519.855a19.196 19.196 0 0 0 3.252-2.587 19.015 19.015 0 0 0 1.68 1.491l.616-.787A18.182 18.182 0 0 1 5.69 8.114C6.937 6.699 8 4.933 8 3z"
      fill={color}
    />
  </StyledSvg>
);
