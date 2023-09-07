import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";

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
        value: 'oil',
        height: 35,
        width: 35,
      },
      {
        id: 2,
        label: translation.refuel,
        value: 'refuel',
      },
      {
        id: 3,
        label: translation.tireReplacement,
        value: 'tire',
      },
      {
        id: 4,
        label: translation.batteryReplacement,
        value: 'battery',
      },
      {
        id: 5,
        label: translation.linedUpAndBalanced,
        value: 'lined-up-and-balanced',
      },
      {
        id: 6,
        label: translation.shockAbsorbersReplacement,
        value: 'shock-absorbers',
      },
      {
        id: 7,
        label: translation.brakeFibersReplacement,
        value: 'brake-fiber',
      },
      {
        id: 8,
        label: translation.sideMirrorsReplacement,
        value: 'side-mirror',
      },
      {
        id: 9,
        label: translation.lightBulbReplacement,
        value: 'light-bulb',
      },
      {
        id: 10,
        label: translation.engineReplacement,
        value: 'engine',
      },
      {
        id: 11,
        label: translation.radiatorReplacement,
        value: 'radiator',
      },
      {
        id: 12,
        label: translation.brushReplacement,
        value: 'brush',
      },
      {
        id: 13,
        label: translation.engineAirFilterChange,
        value: 'engine-air-filter',
      },
      {
        id: 14,
        label: translation.acAirFilterChange,
        value: 'ac-air-filter',
      },
      {
        id: 15,
        label: translation.coolantChange,
        value: 'coolant',
      },
      {
        id: 16,
        label: translation.brakesAdjustment,
        value: 'brake',
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
