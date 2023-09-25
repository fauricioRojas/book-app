'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation'
import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, Typography } from '@/shared/components';
import { TNavbarItem } from './navbar.types';

const StyledLink = styled(NextLink)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size1};
  text-decoration: none;
`;

type NavbarItemProps = TNavbarItem;

export const NavbarItem: FC<NavbarItemProps> = ({ iconName, text, href }) => {
  const pathname = usePathname()
  const { colors } = useTheme();
  const isActive = pathname.includes(href);

  return (
    <StyledLink href={href}>
      <Icon
        name={iconName}
        color={isActive ? colors.primary : colors.secondaryText}
        width={20}
        height={20}
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