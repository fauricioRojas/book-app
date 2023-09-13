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
          body: translation.logOutError,
        });
      }
      setDisabled(false);
    } catch (error) {
      showSnackbar({
        type: 'error',
        body: translation.logOutError,
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Typography variant="h5" mb={4}>{translation.logIn}</Typography>
      <Button
        variant="error"
        disabled={disabled}
        onClick={handleSignOut}
      >
        {translation.logOut}
      </Button>
    </>
  )
};
