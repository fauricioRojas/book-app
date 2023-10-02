import { FC, PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

import { gap, marginBottom } from '@/shared/styles';
import type { Size } from '@/shared/types';

type StyledMarqueeProps = {
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $mb?: Size;
  $mbSm?: Size;
  $mbMd?: Size;
  $mbLg?: Size;
  $mbXl?: Size;
  $mbXxl?: Size;
}
type StyledMarqueeGroupProps = {
  $duration: number;
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
  $reverse: boolean;
}

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const StyledMarquee = styled.div<StyledMarqueeProps>`
  display: flex;
  mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));
  position: relative;
  min-width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));
  ${gap};
  ${marginBottom};
`;
const StyledMarqueeGroup = styled.div<StyledMarqueeGroupProps>`
  animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  display: flex;
  -webkit-animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-direction: ${({ $reverse }) => $reverse ? 'reverse' : undefined};
  ${gap};
`;

type MarqueeProps = PropsWithChildren & {
  durationInSeconds?: number;
  gap?: Size;
  gapSm?: Size;
  gapMd?: Size;
  gapLg?: Size;
  gapXl?: Size;
  gapXxl?: Size;
  mb?: Size;
  mbSm?: Size;
  mbMd?: Size;
  mbLg?: Size;
  mbXl?: Size;
  mbXxl?: Size;
  reverse?: boolean;
}

export const Marquee: FC<MarqueeProps> = ({
  durationInSeconds = 30,
  gap,
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  gapXxl,
  mb,
  mbSm,
  mbMd,
  mbLg,
  mbXl,
  mbXxl,
  reverse = false,
  children,
}) => (
  <StyledMarquee
    $gap={gap}
    $gapSm={gapSm}
    $gapMd={gapMd}
    $gapLg={gapLg}
    $gapXl={gapXl}
    $gapXxl={gapXxl}
    $mb={mb}
    $mbSm={mbSm}
    $mbMd={mbMd}
    $mbLg={mbLg}
    $mbXl={mbXl}
    $mbXxl={mbXxl}
  >
    <StyledMarqueeGroup
      $duration={durationInSeconds}
      $gap={gap}
      $gapSm={gapSm}
      $gapMd={gapMd}
      $gapLg={gapLg}
      $gapXl={gapXl}
      $gapXxl={gapXxl}
      $reverse={reverse}
    >
      {children}
    </StyledMarqueeGroup>
    <StyledMarqueeGroup
      $duration={durationInSeconds}
      $gap={gap}
      $gapSm={gapSm}
      $gapMd={gapMd}
      $gapLg={gapLg}
      $gapXl={gapXl}
      $gapXxl={gapXxl}
      $reverse={reverse}
    >
      {children}
    </StyledMarqueeGroup>
  </StyledMarquee>
);
