import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { FC, PropsWithChildren } from 'react';

import { Container, GlobalStyles } from '@/shared/components';
import {
  CustomThemeProvider,
  DrawerProvider,
  LanguageProvider,
  MeasureProvider,
  ModalProvider,
  SnackbarProvider,
} from '@/contexts';
import { StyledComponentsRegistry } from './registry';
import { Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Book App',
  description: 'Manage your vehicles and pets using Book App',
}

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={lato.className}>
      <StyledComponentsRegistry>
        <CustomThemeProvider>
          <LanguageProvider>
            <MeasureProvider>
              <ModalProvider>
                <SnackbarProvider>
                  <DrawerProvider>
                    <GlobalStyles />
                    <Container>
                      {children}
                    </Container>
                    <Navbar />
                  </DrawerProvider>
                </SnackbarProvider>
              </ModalProvider>
            </MeasureProvider>
          </LanguageProvider>
        </CustomThemeProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
