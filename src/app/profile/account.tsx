"use client";

import { useState } from "react";

import { useLanguage, useSnackbar, useSupabaseAuth } from "@/contexts";
import { Box, Card, FlexWrap, IconButton, Typography } from "@/shared/components";

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
          message: translation.signOutError,
        });
      }
      setDisabled(false);
    } catch (error) {
      showSnackbar({
        type: 'error',
        message: translation.signOutError,
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Box mb={8}>
      <Card background>
        <FlexWrap align="center" justify="space-between">
          <Typography variant="h6">{user.email}</Typography>
          <IconButton
            iconName="sign-out"
            variant="error"
            height={20}
            width={20}
            disabled={disabled}
            onClick={handleSignOut}
          />
        </FlexWrap>
      </Card>
    </Box>
  )
};
