import { FC } from 'react';

import { ICommonIconProps, StyledSvg } from '.';

export const OilIcon: FC<ICommonIconProps> = ({
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
    viewBox="0 0 64 64"
    width={width}
    height={height}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <polygon
      fill={color}
      points="31 20.5 31 23.5 27 23.5 23 23.5 19 23.5 19 20.5"
    />
    <rect
      width="4"
      height="2.99"
      x="23"
      y="23.5"
      fill={color}
    />
    <path
      fill={color}
      d="M13.01,38.49v3.01H13v-0.01h-2c-5.53,0-10-4.471-10-9.99v-0.01c0-3.311,2.69-6,6-6s6,2.689,6,6h0.01v3.01 H13c-1.66,0-3.01-1.35-3.01-3.01c0-1.65-1.34-2.99-2.99-2.99s-2.99,1.34-2.99,2.99L4,31.5c0,3.87,3.13,6.99,7,6.99h2H13.01z"
    />
    <path
      fill={color}
      d="M57,25.51l4,2.99l-2,2l-2-1l-19.99,14h-22c-1.109,0-2-0.88-2.01-2h0.01v-3.01V34.5v-3.01v-3 c0-1.101,0.891-2,2-2H23h4h6l6.01,5L57,25.5V25.51z"
    />
    <path
      fill={color}
      d="M63,39.5c0,2.21-1.79,4-4,4s-4-1.79-4-4s4-6.01,4-6.01S63,37.29,63,39.5z"
    />
    <path
      d="M58.998,31.5c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2-2c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414l-2,2C59.51,31.402,59.254,31.5,58.998,31.5z"
      fill={color}
    />
    <path
      d="M60.997 29.5c-.208 0-.419-.065-.599-.199l-3.994-2.992c-.442-.332-.532-.958-.201-1.4.332-.44.958-.531 1.4-.201l3.994 2.992c.442.332.532.958.201 1.4C61.602 29.361 61.302 29.5 60.997 29.5zM58.997 31.5c-.149 0-.302-.033-.445-.105l-1.996-.996c-.494-.246-.695-.847-.448-1.341.246-.493.846-.697 1.341-.448l1.996.996c.494.246.695.847.448 1.341C59.718 31.297 59.364 31.5 58.997 31.5z"
      fill={color}
    />
    <path
      d="M37.007 44.5c-.315 0-.626-.148-.82-.427-.316-.452-.207-1.076.246-1.393l19.996-13.996c.453-.316 1.076-.207 1.393.246.316.452.207 1.076-.246 1.393L37.579 44.319C37.404 44.441 37.205 44.5 37.007 44.5zM39.008 32.488c-.419 0-.81-.265-.949-.685-.174-.523.109-1.09.634-1.265l17.994-5.988c.522-.17 1.091.109 1.265.634.174.523-.109 1.09-.634 1.265l-17.994 5.988C39.219 32.472 39.112 32.488 39.008 32.488z"
      fill={color}
    />
    <path
      d="M37.006 44.5H15.01c-.553 0-1-.447-1-1s.447-1 1-1h21.996c.553 0 1 .447 1 1S37.559 44.5 37.006 44.5zM39.007 32.488c-.225 0-.451-.076-.639-.231l-6.01-4.996c-.425-.353-.482-.983-.129-1.408.352-.424.98-.482 1.408-.129l6.01 4.996c.425.353.482.983.129 1.408C39.579 32.365 39.294 32.488 39.007 32.488z"
      fill={color}
    />
    <path
      d="M32.998 27.492H15.01c-.553 0-1-.447-1-1s.447-1 1-1h17.988c.553 0 1 .447 1 1S33.551 27.492 32.998 27.492zM13.008 42.498c-.553 0-1-.447-1-1V28.494c0-.553.447-1 1-1s1 .447 1 1v13.004C14.008 42.051 13.561 42.498 13.008 42.498z"
      fill={color}
    />
    <path
      d="M22.998 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996C23.998 27.045 23.551 27.492 22.998 27.492zM27 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996C28 27.045 27.553 27.492 27 27.492zM59 44.496c-2.757 0-5-2.243-5-5 0-2.512 3.592-6.045 4.312-6.728.387-.365.99-.365 1.377 0C60.408 33.451 64 36.984 64 39.496 64 42.253 61.757 44.496 59 44.496zM59 34.907c-1.416 1.482-3 3.54-3 4.589 0 1.654 1.346 3 3 3s3-1.346 3-3C62 38.444 60.417 36.388 59 34.907zM10.998 42.494c-6.063 0-10.996-4.933-10.996-10.996 0-.553.447-1 1-1s1 .447 1 1c0 4.961 4.035 8.996 8.996 8.996.553 0 1 .447 1 1S11.551 42.494 10.998 42.494z"
      fill={color}
    />
    <path
      d="M10.998,39.494c-4.409,0-7.996-3.587-7.996-7.996c0-0.553,0.447-1,1-1s1,0.447,1,1c0,3.307,2.689,5.996,5.996,5.996 c0.553,0,1,0.447,1,1S11.551,39.494,10.998,39.494z"
      fill={color}
    />
    <path
      d="M13,32.494c-0.553,0-1-0.447-1-1c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,0.553-0.447,1-1,1s-1-0.447-1-1c0-3.859,3.141-7,7-7 s7,3.141,7,7C14,32.047,13.553,32.494,13,32.494z"
      fill={color}
    />
    <path
      d="M9.994,32.494c-0.553,0-1-0.447-1-1C8.994,30.395,8.1,29.5,7,29.5s-1.994,0.895-1.994,1.994c0,0.553-0.447,1-1,1 s-1-0.447-1-1C3.006,29.292,4.798,27.5,7,27.5s3.994,1.792,3.994,3.994C10.994,32.047,10.547,32.494,9.994,32.494z"
      fill={color}
    />
    <path
      d="M12.998 35.496c-2.208 0-4.004-1.795-4.004-4.002 0-.553.447-1 1-1s1 .447 1 1c0 1.104.899 2.002 2.004 2.002.553 0 1 .447 1 1S13.551 35.496 12.998 35.496zM12.998 39.494h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1S13.551 39.494 12.998 39.494zM13 42.494h-2.002c-.553 0-1-.447-1-1s.447-1 1-1H13c.553 0 1 .447 1 1S13.553 42.494 13 42.494zM13.008 29.494c-.553 0-1-.447-1-1 0-1.655 1.347-3.002 3.002-3.002.553 0 1 .447 1 1s-.447 1-1 1-1.002.449-1.002 1.002S13.561 29.494 13.008 29.494z"
      fill={color}
    />
    <path
      d="M15.01 44.504c-1.659 0-3.01-1.351-3.01-3.01 0-.553.447-1 1-1s1 .447 1 1c0 .557.453 1.01 1.01 1.01.553 0 1 .447 1 1S15.563 44.504 15.01 44.504zM31.002 24.496H18.998c-.553 0-1-.447-1-1v-3c0-.553.447-1 1-1h12.004c.553 0 1 .447 1 1v3C32.002 24.049 31.555 24.496 31.002 24.496zM19.998 22.496h10.004v-1H19.998V22.496z"
      fill={color}
    />
  </StyledSvg>
);
