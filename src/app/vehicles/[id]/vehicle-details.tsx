'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useTheme } from "styled-components";

import { IVehicle } from "@/supabase";
import { FlexWrap, Icon, IconName, PhotoPreview, Typography } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { useLanguage } from "@/contexts";

interface IVehicleDetailsProps extends IVehicle {}

export const VehicleDetails: FC<IVehicleDetailsProps> = ({
  id,
  brand,
  model,
  plateNumber,
  notes,
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <>
      <FlexWrap align="baseline" gap={3} mb={8}>
        <Icon
          name="arrow-back"
          height={25}
          width={25}
          color={colors.primaryText}
          onClick={router.back}
        />
        <FlexWrap align="center" gap={6}>
          <Typography
            variant="h1"
            fontWeight="bold"
          >
            {brand}
          </Typography>
          <Icon
            name={notes.type as IconName}
            height={40}
            width={40}
            color={colors.primaryText}
          />
        </FlexWrap>
      </FlexWrap>
      <FlexWrap direction="column" gap={4}>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.plateNumber}</Typography>
          <Typography variant="label">{plateNumber}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.model}</Typography>
          <Typography variant="label">{model}</Typography>
        </FlexWrap>
        <FlexWrap direction="column" gap={2}>
          <Typography variant="h5" fontWeight="bold">{translation.dateOfPurchase}</Typography>
          <Typography variant="label">{formatDate(notes.date)}</Typography>
        </FlexWrap>
        {notes.description && (
          <FlexWrap direction="column" gap={2}>
            <Typography variant="h5" fontWeight="bold">Description</Typography>
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
