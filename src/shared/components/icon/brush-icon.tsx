import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const BrushIcon: FC<CommonIconProps> = ({
  color,
  pointer,
  ml,
  mr,
  size = 'sm',
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.467 8.467"
    $color={color}
    $size={size}
    $ml={ml}
    $mr={mr}
    $isClickable={pointer || !!props.onClick}
    {...props}
  >
    <path
      d="M1.323 2.83v3.308h2.166L2.007 2.831zm1.49 0 1.288 2.872v-.49h.265v.926h2.778V2.831H4.366v.926H4.1v-.926zm1.288 1.192h.265v.926H4.1z"
      fill="currentColor"
    />
    <path d="M4.101 290.173v.926h.265v-.926z" fill="currentColor" />
    <path
      d="M2.523 289.966a1.19 1.19 0 0 0-.337.828h.265c0-.24.094-.471.262-.644zm.94-.358a1.19 1.19 0 0 0-.743.195l.146.22a.927.927 0 0 1 .578-.15zm.256.047-.076.254a.926.926 0 0 1 .483.342l.214-.156a1.192 1.192 0 0 0-.62-.44zm2.224.311-.19.185a.925.925 0 0 1 .262.643h.265c0-.309-.121-.606-.337-.827zm-.94-.358.02.264a.926.926 0 0 1 .577.151l.146-.22a1.191 1.191 0 0 0-.742-.195z"
      transform="translate(0 -288.533)"
      fill="currentColor"
    />
    <path
      d="M4.747 289.655a1.19 1.19 0 0 0-.62.44l.213.156a.925.925 0 0 1 .483-.342z"
      fill="currentColor"
    />
    <path
      d="M4.101 290.173v.926h.265v-.926z"
      transform="translate(0 -288.533)"
      fill="currentColor"
    />
    <path
      d="M2.523 289.966a1.19 1.19 0 0 0-.336.828h.265c0-.24.093-.472.261-.644zm.94-.358a1.191 1.191 0 0 0-.743.195l.146.22a.925.925 0 0 1 .578-.15zm.257.047-.076.254a.925.925 0 0 1 .482.342l.214-.156a1.19 1.19 0 0 0-.62-.44zm2.223.311c.216.222.336.519.337.828h-.265a.926.926 0 0 0-.261-.644zm-.94-.358c.263-.019.524.05.743.195l-.146.22a.925.925 0 0 0-.577-.15z"
      fill="currentColor"
    />
    <path
      d="m4.747 289.655.076.254a.925.925 0 0 0-.483.342l-.214-.156a1.19 1.19 0 0 1 .621-.44zm-.514 5.347a.465.465 0 0 0-.463.463c0 .255.209.463.463.463a.465.465 0 0 0 .463-.463.465.465 0 0 0-.463-.463z"
      transform="translate(0 -288.533)"
      fill="currentColor"
    />
    <path
      d="m2.504 291.239-.003.003-.246.11 1.723 3.843.25-.111z"
      transform="translate(0 -288.533)"
      fill="currentColor"
    />
  </StyledSvg>
);
