import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { FullSize, Size } from '@/shared/types';

type Height = FullSize | string;
type Width = 'quarter' | 'half' | 'three-quarters' | 'full';

interface IStyledSkeletonProps {
  $height: Height;
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

const StyledSkeleton = styled.div<IStyledSkeletonProps>`
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
    width: ${({ $widthSm }) => $widthSm ? WIDTH_MAPPER[$widthSm] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ $widthMd }) => $widthMd ? WIDTH_MAPPER[$widthMd] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ $widthLg }) => $widthLg ? WIDTH_MAPPER[$widthLg] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    width: ${({ $widthXl }) => $widthXl ? WIDTH_MAPPER[$widthXl] : undefined};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    width: ${({ $widthXxl }) => $widthXxl ? WIDTH_MAPPER[$widthXxl] : undefined};
  }
`;

interface ISkeletonProps {
  height: Height;
  width: Width;
  widthSm?: Width;
  widthMd?: Width;
  widthLg?: Width;
  widthXl?: Width;
  widthXxl?: Width;
  mb?: Size;
}

export const Skeleton: FC<ISkeletonProps> = ({
  height,
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
    $width={width}
    $widthSm={widthSm}
    $widthMd={widthMd}
    $widthLg={widthLg}
    $widthXl={widthXl}
    $widthXxl={widthXxl}
    $mb={mb}
  />
);
