import { FC } from 'react';

import { StyledSvg, type CommonIconProps } from '.';

export const MotorcycleGripIcon: FC<CommonIconProps> = ({
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
      d="M7.607 3.548a.595 1.058 0 0 0-.595 1.058.595 1.058 0 0 0 .595 1.058.595 1.058 0 0 0 .595-1.058.595 1.058 0 0 0-.595-1.058zm.008.655a.132.132 0 0 1 .013 0 .132.132 0 0 1 .09.04.5.5 0 0 1 .124.367c-.002.14-.036.27-.135.36a.132.132 0 1 1-.18-.194.307.307 0 0 0 .05-.17.317.317 0 0 0-.048-.177.132.132 0 0 1 .086-.226z"
      fill="currentColor"
    />
    <path
      d="M1.587 2.953c-.252-.043-.462.355-.462.793 0 .438.212.742.462.794.594.124 1.366.245 2.136.355a3.358 3.358 0 0 1 .101-1.638 49.134 49.134 0 0 1-2.237-.304zm3.532-.769c-.296.016-.58.208-.797.543-.493.764-.537 2.019-.112 2.881.213.431.518.695.858.737.34.041.679-.153.926-.534a.132.132 0 1 0-.222-.144c-.212.325-.45.442-.672.415-.223-.027-.465-.21-.653-.59a2.342 2.342 0 0 1-.173-.52 114.6 114.6 0 0 0 2.009.255 1.891 1.891 0 0 1-.114-.793c.016-.198.078-.421.172-.617.036-.076.078-.146.124-.211-.695-.112-1.41-.2-2.123-.285.054-.165.119-.32.203-.45.21-.328.449-.446.671-.42.186.022.386.154.556.417l-.126-.02a.132.132 0 1 0-.043.26l.395.066a.132.132 0 0 0 .144-.081l.132-.33a.132.132 0 0 0-.127-.183.132.132 0 0 0-.119.085L6 2.735c-.203-.319-.466-.513-.753-.547a.779.779 0 0 0-.128-.004zm1.657 1.474a.849.849 0 0 0-.196.273c-.08.165-.135.367-.148.524-.013.158.005.368.054.543.032.115.08.206.127.267l.292.034a1.872 1.872 0 0 1-.125-.692c0-.328.072-.627.204-.862l.031-.046-.24-.04z"
      fill="currentColor"
    />
    <path
      d="M.933 2.273a.591.591 0 0 0-.27.053C.28 2.498.012 3.05 0 3.685c-.011.636.237 1.21.613 1.418.325.178.685.049.93-.336H1.54c-.4-.084-.647-.508-.647-1.02 0-.257.058-.498.167-.692a.729.729 0 0 1 .217-.248.493.493 0 0 1 .289-.086c-.166-.277-.393-.438-.633-.449z"
      fill="currentColor"
    />
  </StyledSvg>
);
