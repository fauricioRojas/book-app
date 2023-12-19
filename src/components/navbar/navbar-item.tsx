'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, Typography } from '@/shared/components';
import type { TNavbarItem } from './navbar.types';

const StyledLink = styled(NextLink)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size1};
  text-decoration: none;

  ${({ theme }) => theme.breakpoints.lg} {
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => `${theme.gutters.size1} ${theme.gutters.size0}`};
    transition: background-color 0.15s ease-in-out;
    width: 100px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.card};
    }
  }
`;

type NavbarItemProps = TNavbarItem;

export const NavbarItem: FC<NavbarItemProps> = ({ iconName, text, href }) => {
  const pathname = usePathname();
  const { colors } = useTheme();
  const isActive = pathname.includes(href);

  return (
    <StyledLink href={href}>
      <Icon
        name={iconName}
        color={isActive ? colors.primary : colors.secondaryText}
        pointer
      />
      <Typography
        variant="span"
        fontWeight="bold"
        color={isActive ? 'primary' : 'secondary-text'}
      >
        {text}
      </Typography>
    </StyledLink>
  );
};
