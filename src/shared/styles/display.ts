import { css } from "styled-components";

type DisplayProps = {
  $display?: boolean;
  $displaySm?: boolean;
  $displayMd?: boolean;
  $displayLg?: boolean;
  $displayXl?: boolean;
  $displayXxl?: boolean;
};

export const display = css<DisplayProps>`
  ${({ $display }) =>
    typeof $display === "boolean" &&
    css`
      display: ${$display ? "block" : "none"};
    `}
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ $displaySm }) =>
      typeof $displaySm === "boolean" &&
      css`
        display: ${$displaySm ? "block" : "none"};
      `}
  }
  ${({ theme }) => theme.breakpoints.md} {
    ${({ $displayMd }) =>
      typeof $displayMd === "boolean" &&
      css`
        display: ${$displayMd ? "block" : "none"};
      `}
  }
  ${({ theme }) => theme.breakpoints.lg} {
    ${({ $displayLg }) =>
      typeof $displayLg === "boolean" &&
      css`
        display: ${$displayLg ? "block" : "none"};
      `}
  }
  ${({ theme }) => theme.breakpoints.xl} {
    ${({ $displayXl }) =>
      typeof $displayXl === "boolean" &&
      css`
        display: ${$displayXl ? "block" : "none"};
      `}
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    ${({ $displayXxl }) =>
      typeof $displayXxl === "boolean" &&
      css`
        display: ${$displayXxl ? "block" : "none"};
      `}
  }
`;
