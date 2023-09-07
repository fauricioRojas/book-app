import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { ENGLISH } from "@/contexts/language/constants/english.constants";

interface IMaintenancesSelectorProps {
  onSelect: (type: ITypeSelectorOption) => void;
}

export const MaintenancesSelector: FC<IMaintenancesSelectorProps> = ({ onSelect }) => {
  const { language, translation } = useLanguage();
  const maintenancesTypes = useMemo(() => {
    const types: ITypeSelectorOption[] = [
      {
        id: 1,
        label: translation.oilChange,
        value: ENGLISH.oilChange,
        height: 35,
        width: 35,
      },
      {
        id: 2,
        label: translation.refuel,
        value: ENGLISH.refuel,
      },
      {
        id: 3,
        label: translation.tireReplacement,
        value: ENGLISH.tireReplacement,
      },
      {
        id: 4,
        label: translation.batteryReplacement,
        value: ENGLISH.batteryReplacement,
      },
      {
        id: 5,
        label: translation.linedUpAndBalanced,
        value: ENGLISH.linedUpAndBalanced,
      },
      {
        id: 6,
        label: translation.shockAbsorbersReplacement,
        value: ENGLISH.shockAbsorbersReplacement,
      },
      {
        id: 7,
        label: translation.brakeFibersReplacement,
        value: ENGLISH.brakeFibersReplacement,
      },
      {
        id: 8,
        label: translation.sideMirrorsReplacement,
        value: ENGLISH.sideMirrorsReplacement,
      },
      {
        id: 9,
        label: translation.lightBulbReplacement,
        value: ENGLISH.lightBulbReplacement,
      },
      {
        id: 10,
        label: translation.engineReplacement,
        value: ENGLISH.engineReplacement,
      },
      {
        id: 11,
        label: translation.radiatorReplacement,
        value: ENGLISH.radiatorReplacement,
      },
      {
        id: 12,
        label: translation.brushReplacement,
        value: ENGLISH.brushReplacement,
      },
      {
        id: 13,
        label: translation.engineAirFilterChange,
        value: ENGLISH.engineAirFilterChange,
      },
      {
        id: 14,
        label: translation.acAirFilterChange,
        value: ENGLISH.acAirFilterChange,
      },
      {
        id: 15,
        label: translation.coolantChange,
        value: ENGLISH.coolantChange,
      },
      {
        id: 16,
        label: translation.brakesAdjustment,
        value: ENGLISH.brakesAdjustment,
        width: 35,
        height: 35,
      },
      {
        id: 17,
        label: translation.washed,
        value: ENGLISH.washed,
      },
      {
        id: 18,
        label: translation.beltChange,
        value: ENGLISH.beltChange,
      },
      {
        id: 19,
        label: translation.oilFilterChange,
        value: ENGLISH.oilFilterChange,
        width: 25,
        height: 25,
      },
      {
        id: 20,
        label: translation.ballJointsChange,
        value: ENGLISH.ballJointsChange,
      },
      {
        id: 21,
        label: translation.chainChange,
        value: ENGLISH.chainChange,
      },
      {
        id: 22,
        label: translation.paintDetailing,
        value: ENGLISH.paintDetailing,
      },
      {
        id: 23,
        label: translation.fuseReplacement,
        value: ENGLISH.fuseReplacement,
        width: 25,
        height: 25,
      },
      {
        id: 24,
        label: translation.bushingChange,
        value: ENGLISH.bushingChange,
      },
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector
      types={maintenancesTypes}
      showSearchInput
      onSelect={onSelect}
    />
  );
};
