'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import { INavbarItem } from './navbar.types';
import { NavbarItem } from './navbar-item';
import { useLanguage } from '@/contexts';

const StyledNavbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  bottom: ${({ theme }) => theme.gutters.size0};
  display: flex;
  height: 58px;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  position: fixed;
  transition: background-color .3s;
  width: 100%;
`;

export const Navbar = () => {
  const { language, translation } = useLanguage();

  const navbarItems = useMemo(() => {
    const items: INavbarItem[] = [
      {
        iconName: 'tire',
        text: translation.vehicles,
        href: '/vehicles',
      },
      {
        iconName: 'footprint',
        text: translation.pets,
        href: '/pets',
      },
      {
        iconName: 'settings',
        text: translation.settings,
        href: '/settings',
      },
    ];
    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <StyledNavbar>
      {navbarItems.map(navbarItem => (
        <NavbarItem key={navbarItem.text} {...navbarItem} />
      ))}
    </StyledNavbar>
  );
};
