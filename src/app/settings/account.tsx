"use client";

import { useState } from "react";

import { useLanguage, useSnackbar, useSupabaseAuth } from "@/contexts";
import { Box, Button, Typography } from "@/shared/components";

export const Account = () => {
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
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={4}>{translation.account}</Typography>
      <Button
        variant="error"
        rightIconName="sign-out"
        disabled={disabled}
        onClick={handleSignOut}
      >
        {translation.signOut}
      </Button>
    </Box>
  )
};
