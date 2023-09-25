'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import { TNavbarItem } from './navbar.types';
import { NavbarItem } from './navbar-item';
import { useLanguage, useSupabaseAuth } from '@/contexts';
import { ROUTES } from '@/shared/constants';

const StyledNavbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutralTransparent};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  bottom: ${({ theme }) => theme.gutters.size0};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
  position: fixed;
  transition: background-color .3s;
  width: 100%;
`;

export const Navbar = () => {
  const { user } = useSupabaseAuth();
  const { language, translation } = useLanguage();

  const navbarItems = useMemo((): TNavbarItem[] => [
    {
      iconName: 'bell',
      text: translation.reminders,
      href: ROUTES.REMINDERS,
    },
    {
      iconName: 'tire',
      text: translation.vehicles,
      href: ROUTES.VEHICLES,
    },
    {
      iconName: 'footprint',
      text: translation.pets,
      href: ROUTES.PETS,
    },
    {
      iconName: 'profile',
      text: translation.profile,
      href: ROUTES.PROFILE,
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [language]);

  if (!user) {
    return null;
  }

  return (
    <StyledNavbar>
      {navbarItems.map(navbarItem => (
        <NavbarItem key={navbarItem.text} {...navbarItem} />
      ))}
    </StyledNavbar>
  );
};
