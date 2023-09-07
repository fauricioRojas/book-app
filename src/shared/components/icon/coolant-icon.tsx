import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const CoolantIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.467 8.467"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      d="M2.712 290.122v.264h.132v.662H.992v.926H.463v.265h.794v-.926h1.852v-.927h.53v.927h4.1v3.102a.563.563 0 0 1-.423-.06l-.348-.195-.03-.017h-.035a.846.846 0 0 0-.774.017l-.319.178-.03.017a.581.581 0 0 1-.58 0l-.408-.23a.741.741 0 0 0-.36-.09.74.74 0 0 0-.361.09l-.407.23a.581.581 0 0 1-.581 0l-.349-.196-.03-.016H2.67a.846.846 0 0 0-.775.016l-.318.179-.03.017a.591.591 0 0 1-.29.077v-1.665H.463v.265h.53v2.38h7.01v-4.365h-4.1v-.662h.132v-.264z"
      transform="translate(0 -288.533)"
      fill={color}
    />
    <path
      d="M6.679 291.577a.132.132 0 0 0-.092.039l-.397.397a.132.132 0 1 0 .187.187l.304-.304.303.304a.132.132 0 1 0 .187-.187l-.397-.397a.132.132 0 0 0-.095-.04zm-.397 1.586a.132.132 0 0 0-.092.227l.397.397a.132.132 0 0 0 .187 0l.397-.397a.132.132 0 1 0-.187-.187l-.303.304-.304-.304a.132.132 0 0 0-.095-.04z"
      transform="translate(0 -288.533)"
      fill={color}
    />
    <path
      d="M6.548 291.71v1.851h.265v-1.852z"
      transform="translate(0 -288.533)"
      fill={color}
    />
  </StyledSvg>
);
