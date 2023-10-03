import { css } from 'styled-components';

import { Size } from '@/shared/types';

type GapProps = {
  $gap?: Size;
  $gapSm?: Size;
  $gapMd?: Size;
  $gapLg?: Size;
  $gapXl?: Size;
  $gapXxl?: Size;
};

export const gap = css<GapProps>`
  gap: ${({ $gap, theme }) =>
    typeof $gap === 'number' ? theme.gutters[`size${$gap}`] : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    gap: ${({ $gapSm, theme }) =>
      typeof $gapSm === 'number' ? theme.gutters[`size${$gapSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ $gapMd, theme }) =>
      typeof $gapMd === 'number' ? theme.gutters[`size${$gapMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    gap: ${({ $gapLg, theme }) =>
      typeof $gapLg === 'number' ? theme.gutters[`size${$gapLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    gap: ${({ $gapXl, theme }) =>
      typeof $gapXl === 'number' ? theme.gutters[`size${$gapXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    gap: ${({ $gapXxl, theme }) =>
      typeof $gapXxl === 'number'
        ? theme.gutters[`size${$gapXxl}`]
        : undefined};
  }
`;
