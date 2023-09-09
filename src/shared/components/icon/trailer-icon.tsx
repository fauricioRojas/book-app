import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const TrailerIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 512 512"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M383.2 158.5c-1.1 0-2 .9-2 2v132.1c0 1.1.9 2 2 2h21.6c1.1 0 2-.9 2-2V160.5c0-1.1-.9-2-2-2H383.2zM128.8 294.6c1.1 0 2-.9 2-2V161.5c0-1.1-.9-2-2-2h-21.6c-1.1 0-2 .9-2 2v131.1c0 1.1.9 2 2 2H128.8z"
      fill={color}
    />
    <path
      d="M468.1 170h-6.7v-33.4c0-4.1-3.4-7.4-7.5-7.2h0-47.1-38.6c-1.1 0-2-.9-2-2V115c0-1.1-.9-2-2-2H147.8c-1.1 0-2 .9-2 2v12.5c0 1.1-.9 2-2 2h-38.6H58.1c0 0 0 0 0 0-.6 0-1.1.1-1.7.2 0 0 0 0 0 0 0 0 0 0 0 0-.5.1-.9.3-1.4.5-.1.1-.3.1-.4.2-2.4 1.3-4 3.8-4 6.6v33h-6.7c-1.7 0-3 1.3-3 3v53.2c0 1.7 1.3 3 3 3h28.4c1.7 0 3-1.3 3-3V173c0-1.7-1.3-3-3-3h-6.7v-23.5c0-1.1.9-2 2-2h37.6 38.6c1.1 0 2 .9 2 2v155.6 5.5c0 1.1-.9 2-2 2h-42.4c-8.3 0-15 6.7-15 15v84.3c0 1.1-.9 2-2 2h-13-9.2c-1.1 0-2 .9-2 2v34.4c0 1.1.9 2 2 2h387.6c1.1 0 2-.9 2-2v-34.4c0-1.1-.9-2-2-2h-9.2-13c-1.1 0-2-.9-2-2v-84.3c0-8.3-6.7-15-15-15h-42.4c-1.1 0-2-.9-2-2v-5.5V146.5c0-1.1.9-2 2-2h38.6 37.6c1.1 0 2 .9 2 2V170h-6.7c-1.7 0-3 1.3-3 3v53.2c0 1.7 1.3 3 3 3h28.4c1.7 0 3-1.3 3-3V173C471.1 171.4 469.8 170 468.1 170zM129.3 380.9c-10.8 0-19.6-8.8-19.6-19.6 0-10.8 8.8-19.6 19.6-19.6 10.8 0 19.6 8.8 19.6 19.6C148.9 372.1 140.1 380.9 129.3 380.9zM168.5 135.8h80v73.5c0 0 0 0 0 0h-80V135.8zM313.9 351.8c0 1.1-.9 2-2 2H200.1c-1.1 0-2-.9-2-2v-10.5c0-1.1.9-2 2-2h111.7c1.1 0 2 .9 2 2V351.8zM313.9 322.2c0 1.1-.9 2-2 2H200.1c-1.1 0-2-.9-2-2v-10.6c0-1.1.9-2 2-2h111.7c1.1 0 2 .9 2 2V322.2zM313.9 292.6c0 1.1-.9 2-2 2H200.1c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h111.7c1.1 0 2 .9 2 2V292.6zM313.9 263.6c0 1.1-.9 2-2 2H200.1c-1.1 0-2-.9-2-2v-10.6c0-1.1.9-2 2-2h111.7c1.1 0 2 .9 2 2V263.6zM343.5 209.3h-80v-73.5h80V209.3zM382.7 341.7c10.8 0 19.6 8.8 19.6 19.6 0 10.8-8.8 19.6-19.6 19.6-10.8 0-19.6-8.8-19.6-19.6C363.1 350.5 371.9 341.7 382.7 341.7zM151.1 464.3H89.8c-1.1 0-2 .9-2 2V490c0 3.3 2.7 6 6 6h53.3c3.3 0 6-2.7 6-6v-23.7C153.1 465.2 152.2 464.3 151.1 464.3zM422.2 464.3h-61.3c-1.1 0-2 .9-2 2V490c0 3.3 2.7 6 6 6h53.3c3.3 0 6-2.7 6-6v-23.7C424.2 465.2 423.3 464.3 422.2 464.3z"
      fill={color}
    />
    <path
      d="M107.2,114.5h21.6c1.1,0,2-0.9,2-2V100c0-1.1,0.9-2,2-2h246.4c1.1,0,2,0.9,2,2v13.5c0,1.1,0.9,2,2,2h21.6c1.1,0,2-0.9,2-2,V18c0-1.1-0.9-2-2-2H107.2c-1.1,0-2,0.9-2,2v94.5C105.2,113.6,106.1,114.5,107.2,114.5z"
      fill={color}
    />
  </StyledSvg>
);