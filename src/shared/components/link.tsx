import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

interface IStyledLinkProps {
  $asContainer?: boolean;
}

const StyledLink = styled(NextLink)<IStyledLinkProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  text-decoration: none;
  
  ${({ $asContainer }) => !$asContainer && css`
    &:hover {
      text-decoration: underline;
    }
  `};

`;

interface ILinkProps extends PropsWithChildren {
  href: string;
  asContainer?: boolean;
}

export const Link: FC<ILinkProps> = ({
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
