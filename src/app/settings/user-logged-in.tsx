"use client";

import { useState } from "react";

import { useLanguage, useSnackbar, useSupabaseAuth } from "@/contexts";
import { Button, Typography } from "@/shared/components";

export const UserLoggedIn = () => {
  const [disabled, setDisabled] = useState(false);
  const { user, signOut } = useSupabaseAuth();
  const { translation } = useLanguage();
  const { showSnackbar } = useSnackbar();

  const handleSignOut = async () => {    
    try {
      setDisabled(true);
      const error = await signOut();
      if (error) {
        showSnackbar({
          type: 'error',
          body: translation.signOutError,
        });
      }
      setDisabled(false);
    } catch (error) {
      showSnackbar({
        type: 'error',
        body: translation.signOutError,
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Typography variant="h5" mb={4}>{translation.signIn}</Typography>
      <Button
        variant="error"
        rightIconName="sign-out"
        disabled={disabled}
        onClick={handleSignOut}
      >
        {translation.signOut}
      </Button>
    </>
  )
};
