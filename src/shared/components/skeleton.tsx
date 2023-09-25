import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import type { FullSize, Size } from '@/shared/types';

type Height = FullSize | string;
type Width = 'quarter' | 'half' | 'three-quarters' | 'full';

type StyledSkeletonProps = {
  $height: Height;
  $heightSm?: Height;
  $heightMd?: Height;
  $heightLg?: Height;
  $heightXl?: Height;
  $heightXxl?: Height;
  $width: Width;
  $widthSm?: Width;
  $widthMd?: Width;
  $widthLg?: Width;
  $widthXl?: Width;
  $widthXxl?: Width;
  $mb?: Size;
}

const WIDTH_MAPPER = {
  quarter: '25%',
  half: '50%',
  'three-quarters': '75%',
  full: '100%',
};

const skeletonAnimation = keyframes`
  from { background-position: 100%; }
  to { background-position: 0% }
`;

const StyledSkeleton = styled.div<StyledSkeletonProps>`
  animation: ${skeletonAnimation} 1.5s infinite;
  background: ${({ theme }) => `linear-gradient(
    90deg,
    ${theme.colors.card} 0%,
    ${theme.colors.card} 40%,
    ${theme.colors.skeleton} 50%,
    ${theme.colors.skeleton} 55%,
    ${theme.colors.card} 65%,
    ${theme.colors.card} 100%
  )`};
  background-size: 300%;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  height: ${({ $height, theme }) => typeof $height === 'number' ? theme.gutters[`size${$height}`] : $height};
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  width: ${({ $width }) => WIDTH_MAPPER[$width]};

  @media (width >= ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ $heightSm, theme }) => typeof $heightSm === 'number' ? theme.gutters[`size${$heightSm}`] : $heightSm};
    width: ${({ $widthSm }) => $widthSm ? WIDTH_MAPPER[$widthSm] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ $heightMd, theme }) => typeof $heightMd === 'number' ? theme.gutters[`size${$heightMd}`] : $heightMd};
    width: ${({ $widthMd }) => $widthMd ? WIDTH_MAPPER[$widthMd] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ $heightLg, theme }) => typeof $heightLg === 'number' ? theme.gutters[`size${$heightLg}`] : $heightLg};
    width: ${({ $widthLg }) => $widthLg ? WIDTH_MAPPER[$widthLg] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    height: ${({ $heightXl, theme }) => typeof $heightXl === 'number' ? theme.gutters[`size${$heightXl}`] : $heightXl};
    width: ${({ $widthXl }) => $widthXl ? WIDTH_MAPPER[$widthXl] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    height: ${({ $heightXxl, theme }) => typeof $heightXxl === 'number' ? theme.gutters[`size${$heightXxl}`] : $heightXxl};
    width: ${({ $widthXxl }) => $widthXxl ? WIDTH_MAPPER[$widthXxl] : undefined};
  }
`;

type SkeletonProps = {
  height: Height;
  heightSm?: Height;
  heightMd?: Height;
  heightLg?: Height;
  heightXl?: Height;
  heightXxl?: Height;
  width: Width;
  widthSm?: Width;
  widthMd?: Width;
  widthLg?: Width;
  widthXl?: Width;
  widthXxl?: Width;
  mb?: Size;
}

export const Skeleton: FC<SkeletonProps> = ({
  height,
  heightSm,
  heightMd,
  heightLg,
  heightXl,
  heightXxl,
  width,
  widthSm,
  widthMd,
  widthLg,
  widthXl,
  widthXxl,
  mb
}) => (
  <StyledSkeleton
    $height={height}
    $heightSm={heightSm}
    $heightMd={heightMd}
    $heightLg={heightLg}
    $heightXl={heightXl}
    $heightXxl={heightXxl}
    $width={width}
    $widthSm={widthSm}
    $widthMd={widthMd}
    $widthLg={widthLg}
    $widthXl={widthXl}
    $widthXxl={widthXxl}
    $mb={mb}
  />
);
