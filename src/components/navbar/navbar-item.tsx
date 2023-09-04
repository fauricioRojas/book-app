'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, Typography } from '@/shared/components';
import { INavbarItem } from './navbar.types';

interface StyledLinkProps {
  $isActive: boolean;
}
const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size1};
  align-items: center;
  text-decoration: none;
  flex: 1;
`;


interface NavbarItemProps extends INavbarItem {}

export const NavbarItem: FC<NavbarItemProps> = ({ iconName, text, href }) => {
  const pathname = usePathname()
  const { colors } = useTheme();
  const isActive = pathname === href;

  return (
    <StyledLink $isActive={pathname === href} href={href}>
      <Icon
        name={iconName}
        color={isActive ? colors.primary : colors.primaryText}
        width={20}
        height={20}
      />
      <Typography
        variant="span"
        fontWeight="bold"
        color={isActive ? 'primary' : undefined}
      >
        {text}
      </Typography>
    </StyledLink>
  );
};