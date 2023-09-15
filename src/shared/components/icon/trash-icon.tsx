import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const TrashIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 24 24"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      fill="none"
      d="M0 0h24v24H0Z"
    />
    <path
      fill={color}
      d="M11.155 11.7v5.4a.894.894 0 0 1-.888.9.894.894 0 0 1-.887-.9v-5.409a.888.888 0 0 1 1.776.009Zm2.681-.892a.888.888 0 0 0-.892.884V17.1a.894.894 0 0 0 .887.9.894.894 0 0 0 .888-.9v-5.4a.888.888 0 0 0-.883-.893ZM19.598 6v1.8a1.8 1.8 0 0 1-1.044 1.639c0 .053.008.107.008.161v10.2a1.788 1.788 0 0 1-1.776 1.8H7.312a1.788 1.788 0 0 1-1.776-1.8V9.6a1.024 1.024 0 0 1 .008-.161A1.8 1.8 0 0 1 4.5 7.8V6a1.788 1.788 0 0 1 1.776-1.8h3.761a1.788 1.788 0 0 1 1.776-1.8h.469a1.788 1.788 0 0 1 1.776 1.8h3.761A1.788 1.788 0 0 1 19.597 6Zm-2.806 13.8-.006-10.2H7.312v10.2ZM17.822 6H6.28v1.8h11.542Z"
    />
  </StyledSvg>
);
