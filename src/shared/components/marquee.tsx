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
  gap: ${({ $gap, theme }) => theme.gutters[`size${$gap}`]};
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));
  position: relative;
  min-width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0));

  ${({ theme }) => theme.breakpoints.sm} {
    gap: ${({ $gapSm, theme }) => theme.gutters[`size${$gapSm}`]};
    margin-bottom: ${({ $mbSm, theme }) => theme.gutters[`size${$mbSm}`]};
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ $gapMd, theme }) => theme.gutters[`size${$gapMd}`]};
    margin-bottom: ${({ $mbMd, theme }) => theme.gutters[`size${$mbMd}`]};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    gap: ${({ $gapLg, theme }) => theme.gutters[`size${$gapLg}`]};
    margin-bottom: ${({ $mbLg, theme }) => theme.gutters[`size${$mbLg}`]};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    gap: ${({ $gapXl, theme }) => theme.gutters[`size${$gapXl}`]};
    margin-bottom: ${({ $mbXl, theme }) => theme.gutters[`size${$mbXl}`]};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    gap: ${({ $gapXxl, theme }) => theme.gutters[`size${$gapXxl}`]};
    margin-bottom: ${({ $mbXxl, theme }) => theme.gutters[`size${$mbXxl}`]};
  }
`;
const StyledMarqueeGroup = styled.div<StyledMarqueeGroupProps>`
  animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  display: flex;
  gap: ${({ $gap, theme }) => theme.gutters[`size${$gap}`]};
  -webkit-animation: ${marqueeAnimation} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-direction: ${({ $reverse }) => $reverse ? 'reverse' : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    gap: ${({ $gapSm, theme }) => theme.gutters[`size${$gapSm}`]};
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ $gapMd, theme }) => theme.gutters[`size${$gapMd}`]};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    gap: ${({ $gapLg, theme }) => theme.gutters[`size${$gapLg}`]};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    gap: ${({ $gapXl, theme }) => theme.gutters[`size${$gapXl}`]};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    gap: ${({ $gapXxl, theme }) => theme.gutters[`size${$gapXxl}`]};
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
