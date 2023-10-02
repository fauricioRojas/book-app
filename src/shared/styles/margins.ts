import { css } from "styled-components";

import { Size } from "@/shared/types";

type MarginBottomProps = {
  $mb?: Size;
  $mbSm?: Size;
  $mbMd?: Size;
  $mbLg?: Size;
  $mbXl?: Size;
  $mbXxl?: Size;
};

type MarginLeftProps = {
  $ml?: Size;
  $mlSm?: Size;
  $mlMd?: Size;
  $mlLg?: Size;
  $mlXl?: Size;
  $mlXxl?: Size;
};

type MarginRightProps = {
  $mr?: Size;
  $mrSm?: Size;
  $mrMd?: Size;
  $mrLg?: Size;
  $mrXl?: Size;
  $mrXxl?: Size;
};

type MarginTopProps = {
  $mt?: Size;
  $mtSm?: Size;
  $mtMd?: Size;
  $mtLg?: Size;
  $mtXl?: Size;
  $mtXxl?: Size;
};

export const marginBottom = css<MarginBottomProps>`
  margin-bottom: ${({ theme, $mb }) =>
    typeof $mb === "number" ? theme.gutters[`size${$mb}`] : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: ${({ $mbSm, theme }) =>
      typeof $mbSm === "number" ? theme.gutters[`size${$mbSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: ${({ $mbMd, theme }) =>
      typeof $mbMd === "number" ? theme.gutters[`size${$mbMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin-bottom: ${({ $mbLg, theme }) =>
      typeof $mbLg === "number" ? theme.gutters[`size${$mbLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    margin-bottom: ${({ $mbXl, theme }) =>
      typeof $mbXl === "number" ? theme.gutters[`size${$mbXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    margin-bottom: ${({ $mbXxl, theme }) =>
      typeof $mbXxl === "number" ? theme.gutters[`size${$mbXxl}`] : undefined};
  }
`;

export const marginLeft = css<MarginLeftProps>`
  margin-left: ${({ theme, $ml }) =>
    typeof $ml === "number" ? theme.gutters[`size${$ml}`] : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    margin-left: ${({ $mlSm, theme }) =>
      typeof $mlSm === "number" ? theme.gutters[`size${$mlSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin-left: ${({ $mlMd, theme }) =>
      typeof $mlMd === "number" ? theme.gutters[`size${$mlMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin-left: ${({ $mlLg, theme }) =>
      typeof $mlLg === "number" ? theme.gutters[`size${$mlLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    margin-left: ${({ $mlXl, theme }) =>
      typeof $mlXl === "number" ? theme.gutters[`size${$mlXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    margin-left: ${({ $mlXxl, theme }) =>
      typeof $mlXxl === "number" ? theme.gutters[`size${$mlXxl}`] : undefined};
  }
`;

export const marginRight = css<MarginRightProps>`
  margin-right: ${({ theme, $mr }) =>
    typeof $mr === "number" ? theme.gutters[`size${$mr}`] : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    margin-right: ${({ $mrSm, theme }) =>
      typeof $mrSm === "number" ? theme.gutters[`size${$mrSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin-right: ${({ $mrMd, theme }) =>
      typeof $mrMd === "number" ? theme.gutters[`size${$mrMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin-right: ${({ $mrLg, theme }) =>
      typeof $mrLg === "number" ? theme.gutters[`size${$mrLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    margin-right: ${({ $mrXl, theme }) =>
      typeof $mrXl === "number" ? theme.gutters[`size${$mrXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    margin-right: ${({ $mrXxl, theme }) =>
      typeof $mrXxl === "number" ? theme.gutters[`size${$mrXxl}`] : undefined};
  }
`;

export const marginTop = css<MarginTopProps>`
  margin-top: ${({ theme, $mt }) =>
    typeof $mt === "number" ? theme.gutters[`size${$mt}`] : undefined};

  ${({ theme }) => theme.breakpoints.sm} {
    margin-top: ${({ $mtSm, theme }) =>
      typeof $mtSm === "number" ? theme.gutters[`size${$mtSm}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin-top: ${({ $mtMd, theme }) =>
      typeof $mtMd === "number" ? theme.gutters[`size${$mtMd}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin-top: ${({ $mtLg, theme }) =>
      typeof $mtLg === "number" ? theme.gutters[`size${$mtLg}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xl} {
    margin-top: ${({ $mtXl, theme }) =>
      typeof $mtXl === "number" ? theme.gutters[`size${$mtXl}`] : undefined};
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    margin-top: ${({ $mtXxl, theme }) =>
      typeof $mtXxl === "number" ? theme.gutters[`size${$mtXxl}`] : undefined};
  }
`;
