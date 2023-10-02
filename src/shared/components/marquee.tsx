import { FC, PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

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
  gap: ${({ $gap, theme }) => $gap ? theme.gutters[`size${$gap}`] : undefined};
  margin-bottom: ${({ $mb, theme }) => $mb ? theme.gutters[`size${$mb}`] : undefined};
  mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));
  position: relative;
  min-width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));

  ${({ theme }) => theme.breakpoints.sm} {
    gap: ${({ $gapSm, theme }) => $gapSm ? theme.gutters[`size${$gapSm}`] : undefined};
    margin-bottom: ${({ $mbSm, theme }) => $mbSm ? theme.gutters[`size${$mbSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ $gapMd, theme }) => $gapMd ? theme.gutters[`size${$gapMd}`] : undefined};
    margin-bottom: ${({ $mbMd, theme }) => $mbMd ? theme.gutters[`size${$mbMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    gap: ${({ $gapLg, theme }) => $gapLg ? theme.gutters[`size${$gapLg}`] : undefined};
    margin-bottom: ${({ $mbLg, theme }) => $mbLg ? theme.gutters[`size${$mbLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    gap: ${({ $gapXl, theme }) => $gapXl ? theme.gutters[`size${$gapXl}`] : undefined};
    margin-bottom: ${({ $mbXl, theme }) => $mbXl ? theme.gutters[`size${$mbXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    gap: ${({ $gapXxl, theme }) => $gapXxl ? theme.gutters[`size${$gapXxl}`] : undefined};
    margin-bottom: ${({ $mbXxl, theme }) => $mbXxl ? theme.gutters[`size${$mbXxl}`] : undefined};
  }
`;
const StyledMarqueeGroup = styled.div<StyledMarqueeGroupProps>`
  animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  display: flex;
  gap: ${({ $gap, theme }) => $gap ? theme.gutters[`size${$gap}`] : undefined};
  -webkit-animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-direction: ${({ $reverse }) => $reverse ? 'reverse' : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    gap: ${({ $gapSm, theme }) => $gapSm ? theme.gutters[`size${$gapSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ $gapMd, theme }) => $gapMd ? theme.gutters[`size${$gapMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    gap: ${({ $gapLg, theme }) => $gapLg ? theme.gutters[`size${$gapLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    gap: ${({ $gapXl, theme }) => $gapXl ? theme.gutters[`size${$gapXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    gap: ${({ $gapXxl, theme }) => $gapXxl ? theme.gutters[`size${$gapXxl}`] : undefined};
  }
`

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
