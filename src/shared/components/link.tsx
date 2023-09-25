import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type StyledLinkProps = {
  $asContainer?: boolean;
}

const StyledLink = styled(NextLink)<StyledLinkProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  text-decoration: none;
  
  ${({ $asContainer }) => !$asContainer && css`
    &:hover {
      text-decoration: underline;
    }
  `};

`;

type LinkProps = PropsWithChildren & {
  href: string;
  asContainer?: boolean;
}

export const Link: FC<LinkProps> = ({
  href,
  asContainer,
  children,
}) => (
  <StyledLink
    $asContainer={asContainer}
    href={href}
  >
    {children}
  </StyledLink>
);
