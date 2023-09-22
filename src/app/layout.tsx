import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { FC, PropsWithChildren } from 'react';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Container, GlobalStyles } from '@/shared/components';
import {
  CustomThemeProvider,
  DrawerProvider,
  LanguageProvider,
  MeasureProvider,
  ModalProvider,
  SnackbarProvider,
  SupabaseProvider,
  SupabaseAuthProvider,
} from '@/contexts';
import { StyledComponentsRegistry } from './registry';
import { Navbar } from '@/components';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'BookApp',
  description: 'Manage your vehicles and pets using Book App',
}

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const supabaseServer = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  return (
    <html lang="en">
      <body className={lato.className}>
        <StyledComponentsRegistry>
          <CustomThemeProvider>
            <LanguageProvider>
              <MeasureProvider>
                <SupabaseProvider>
                  <SupabaseAuthProvider serverSession={session}>
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
                  </SupabaseAuthProvider>
                </SupabaseProvider>
              </MeasureProvider>
            </LanguageProvider>
          </CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
