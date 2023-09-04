import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Size } from '@/shared/types';

type Height = 'sm' | 'md' | 'lg';
type Width = 'quarter' | 'half' | 'three-quarters' | 'full';

interface IStyledSkeletonProps {
  $height: Height;
  $width: Width;
  $mb?: Size;
}

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

  ${({ $height, theme }) => $height === 'sm' && css`
    height: ${theme.gutters.size4};
  `};
  ${({ $height, theme }) => $height === 'md' && css`
    height: ${theme.gutters.size6};
  `};
  ${({ $height, theme }) => $height === 'lg' && css`
    height: ${theme.gutters.size8};
  `};

  ${({ $width }) => $width === 'quarter' && css`
    width: 25%;
  `};
  ${({ $width }) => $width === 'half' && css`
    width: 50%;
  `};
  ${({ $width }) => $width === 'three-quarters' && css`
    width: 75%;
  `};
  ${({ $width }) => $width === 'full' && css`
    width: 100%;
  `};
`

interface ISkeletonProps {
  height: Height;
  width: Width;
  mb?: Size;
}

export const Skeleton: FC<ISkeletonProps> = ({ height, width, mb }) => (
  <StyledSkeleton $height={height} $width={width} $mb={mb} />
);
