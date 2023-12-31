'use client';

import { useMemo } from 'react';
import styled from 'styled-components';

import { useLanguage, useSupabaseAuth } from '@/contexts';
import { ROUTES } from '@/shared/constants';
import { NavbarItem } from './navbar-item';
import type { TNavbarItem } from './navbar.types';

const StyledNavbar = styled.nav`
  align-items: center;
  backdrop-filter: ${({ theme }) => theme.backdropBlur};
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};
  bottom: ${({ theme }) => theme.gutters.size0};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
  position: fixed;
  transition:
    background-color 0.3s,
    border 0.3s;
  width: 100%;
  -webkit-backdrop-filter: ${({ theme }) => theme.backdropBlur};

  ${({ theme }) => theme.breakpoints.lg} {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
    border-top: none;
    bottom: auto;
    gap: ${({ theme }) => theme.gutters.size2};
    height: 60px;
    justify-content: center;
    top: ${({ theme }) => theme.gutters.size0};
  }
`;

export const Navbar = () => {
  const { user } = useSupabaseAuth();
  const { language, translation } = useLanguage();

  const navbarItems = useMemo(
    (): TNavbarItem[] => [
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
        iconName: 'transfer',
        text: translation.transfers,
        href: ROUTES.TRANSFERS,
      },
      {
        iconName: 'profile',
        text: translation.profile,
        href: ROUTES.PROFILE,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  );

  if (!user) {
    return null;
  }

  return (
    <StyledNavbar>
      {navbarItems.map((navbarItem) => (
        <NavbarItem key={navbarItem.text} {...navbarItem} />
      ))}
    </StyledNavbar>
  );
};
