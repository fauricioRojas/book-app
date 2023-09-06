'use client';

import { FC } from "react";
import { useTheme } from "styled-components";

import { IPet } from "@/supabase";
import { FlexWrap, Icon, IconName, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useLanguage } from "@/contexts";

interface IPetDetailsProps extends IPet {}

export const PetDetails: FC<IPetDetailsProps> = ({
  id,
  name,
  breed,
  notes,
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <>
      <FlexWrap align="center" gap={6} mb={8}>
        <Typography
          variant="h1"
          fontWeight="bold"
        >
          {name}
        </Typography>
        <Icon
          name={notes.type as IconName}
          height={40}
          width={40}
          color={colors.primaryText}
        />
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.breed}</Typography>
          <Typography variant="label">{breed}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.dateOfBirth}</Typography>
          <Typography variant="label">{formatDate(notes.date)}</Typography>
        </FlexWrap>
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.description}</Typography>
            <Typography variant="p">{notes.description}</Typography>
          </FlexWrap>
        )}
        {notes.photo && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">{translation.photo}</Typography>
            <PhotoPreview photo={notes.photo} />
          </FlexWrap>
        )}
      </FlexWrap>
    </>
  );
};
