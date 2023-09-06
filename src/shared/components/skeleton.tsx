import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Size } from '@/shared/types';

type Height = 'sm' | 'md' | 'lg' | 'xl';
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
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledSkeleton = styled.div<IStyledSkeletonProps>`
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-name: ${skeletonAnimation};
  animation-timing-function: ease;
  background: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.secondary} 25%, ${theme.colors.skeleton} 37%, ${theme.colors.secondary} 63%)`};
  background-size: 400% 100%;
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  width: ${({ $width }) => WIDTH_MAPPER[$width]};

  ${({ $height, theme }) => $height === 'sm' && css`
    height: ${theme.gutters.size4};
  `};
  ${({ $height, theme }) => $height === 'md' && css`
    height: ${theme.gutters.size6};
  `};
  ${({ $height, theme }) => $height === 'lg' && css`
    height: ${theme.gutters.size8};
  `};
  ${({ $height, theme }) => $height === 'xl' && css`
    height: ${theme.gutters.size12};
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ $widthSm }) => $widthSm ? WIDTH_MAPPER[$widthSm] : undefined};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ $widthMd }) => $widthMd ? WIDTH_MAPPER[$widthMd] : undefined};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ $widthLg }) => $widthLg ? WIDTH_MAPPER[$widthLg] : undefined};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: ${({ $widthXl }) => $widthXl ? WIDTH_MAPPER[$widthXl] : undefined};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: ${({ $widthXxl }) => $widthXxl ? WIDTH_MAPPER[$widthXxl] : undefined};
  }
`

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
