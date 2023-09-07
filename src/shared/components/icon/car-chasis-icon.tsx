import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const CarChasisIcon: FC<ICommonIconProps> = ({
  color,
  ml,
  mr,
  width = 20,
  height = 20,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={typeof props.onClick === 'function'}
    {...props}
  >
    <path
      fill={color}
      d="M382 99V79H130v20h116v314H130v20h252v-20H266V99h116z"
    />
    <path
      fill={color}
      d="M225 395h62v54h-62z"
    />
    <path
      fill={color}
      d="m198.62 119 10.42 28h93.48l10.85-28H198.62z"
    />
    <path
      fill="transparent"
      d="m198.62 119 10.42 28h26l-10.42-28h-26z"
    />
    <path
      fill={color}
      d="M188 59h136v60H188z"
    />
    <path
      fill={color}
      d="M437.043 10h-44.869A18.17 18.17 0 0 0 374 28v45h-44V58.957A6.114 6.114 0 0 0 323.826 53H188.174A6.114 6.114 0 0 0 182 58.957V73h-44V27.794A18 18 0 0 0 119.826 10H74.957A17.983 17.983 0 0 0 57 28v122.087A17.909 17.909 0 0 0 74.957 168h44.869A18.1 18.1 0 0 0 138 150.087V105h44v14.13a6.042 6.042 0 0 0 6.174 5.87h6.268l8.972 24.206a5.883 5.883 0 0 0 5.629 3.794H240v236h-15.043a5.781 5.781 0 0 0-5.957 5.782V407h-81v-45.087A18.1 18.1 0 0 0 119.826 344H74.957A17.909 17.909 0 0 0 57 361.913V484a17.983 17.983 0 0 0 17.957 18h44.869A18.17 18.17 0 0 0 138 484v-45h81v10.044a5.926 5.926 0 0 0 5.957 5.956h62.087a5.926 5.926 0 0 0 5.956-5.956V439h81v45a18.17 18.17 0 0 0 18.174 18h44.869A17.983 17.983 0 0 0 455 484V361.913A17.909 17.909 0 0 0 437.043 344h-44.869A18.1 18.1 0 0 0 374 361.913V407h-81v-12.218a5.781 5.781 0 0 0-5.956-5.782H272V153h30.521a5.885 5.885 0 0 0 5.6-3.719L317.5 125h6.328a6.042 6.042 0 0 0 6.172-5.87V105h44v45.087A18.1 18.1 0 0 0 392.174 168h44.869A17.909 17.909 0 0 0 455 150.087V28a17.983 17.983 0 0 0-17.957-18ZM91 156H74.957A5.9 5.9 0 0 1 69 150.087V134h11a6 6 0 0 0 0-12H69V96h11a6 6 0 0 0 0-12H69V59h11a6 6 0 0 0 0-12H69V28a5.969 5.969 0 0 1 5.957-6H91Zm35-109h-11a6 6 0 0 0 0 12h11v25h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v16.087a6.084 6.084 0 0 1-6.174 5.913H103V22h16.826A6.157 6.157 0 0 1 126 28Zm56 46h-44v-8h44ZM91 490H74.957A5.969 5.969 0 0 1 69 484v-16h11a6 6 0 0 0 0-12H69v-26h11a6 6 0 0 0 0-12H69v-26h11a6 6 0 0 0 0-12H69v-18.087A5.9 5.9 0 0 1 74.957 356H91Zm35-110h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v16a6.157 6.157 0 0 1-6.174 6H103V356h16.826a6.084 6.084 0 0 1 6.174 5.913Zm93 47h-81v-8h81Zm202-71h16.043a5.9 5.9 0 0 1 5.957 5.913V380h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v16a5.969 5.969 0 0 1-5.957 6H421Zm-35 112h11a6 6 0 0 0 0-12h-11v-26h11a6 6 0 0 0 0-12h-11v-26h11a6 6 0 0 0 0-12h-11v-18.087a6.084 6.084 0 0 1 6.174-5.913H409v134h-16.826a6.157 6.157 0 0 1-6.174-6Zm-93-49h81v8h-81Zm-12-18v42h-50v-42Zm-29-12V153h8v236Zm46.4-248h-85.174l-6-16h97.412Zm19.6-28H194V65h124Zm56-20h-44v-8h44Zm35 63h-16.826a6.084 6.084 0 0 1-6.174-5.913V134h11a6 6 0 0 0 0-12h-11V96h11a6 6 0 0 0 0-12h-11V59h11a6 6 0 0 0 0-12h-11V28a6.157 6.157 0 0 1 6.174-6H409Zm34-109h-11a6 6 0 0 0 0 12h11v25h-11a6 6 0 0 0 0 12h11v26h-11a6 6 0 0 0 0 12h11v16.087a5.9 5.9 0 0 1-5.957 5.913H421V22h16.043A5.969 5.969 0 0 1 443 28Z"
    />
    <path
      fill="tranparent"
      d="M235.573 88h59.756a6 6 0 0 0 0-12h-59.756a6 6 0 1 0 0 12zM212 88h4.885a6 6 0 0 0 0-12H212a6 6 0 0 0 0 12z"
    />
  </StyledSvg>
);