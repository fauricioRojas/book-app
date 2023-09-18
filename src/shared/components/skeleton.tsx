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
  0% { transform: translateX(-100%); }
  60% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
`;

const StyledSkeleton = styled.div<IStyledSkeletonProps>`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  height: ${({ $height, theme }) => typeof $height === 'number' ? theme.gutters[`size${$height}`] : $height};
  margin-bottom: ${({ $mb, theme }) => theme.gutters[`size${$mb}`]};
  overflow: hidden;
  position: relative;
  width: ${({ $width }) => WIDTH_MAPPER[$width]};

  &:after {
    animation: 1.5s ${skeletonAnimation} linear 0.5s infinite;
    background: ${({ theme }) => `linear-gradient(90deg, transparent, ${theme.colors.skeleton}, transparent)`};
    content: "";
    display: block;
    height: 100%;
  }

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
