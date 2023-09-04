'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import { INavbarItem } from './navbar.types';
import { NavbarItem } from './navbar-item';
import { useLanguage } from '@/contexts';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  position: fixed;
  display: flex;
  bottom: ${({ theme }) => theme.gutters.size0};
  width: 100%;
  justify-content: space-between;
  transition: background-color .3s;
`;

export const Navbar = () => {
  const { language, translation } = useLanguage();

  const navbarItems = useMemo(() => {
    const items: INavbarItem[] = [
      {
        iconName: 'car',
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
