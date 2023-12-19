import { FC, useMemo } from 'react';

import { useLanguage } from '@/contexts';
import { ENGLISH } from '@/contexts/language/constants/english.constants';
import { TypeSelector } from '@/shared/components';
import { TypeSelectorOption } from '@/shared/types';

type MaintenancesSelectorProps = {
  onSelect: (type: TypeSelectorOption) => void;
};

export const MaintenancesSelector: FC<MaintenancesSelectorProps> = ({
  onSelect,
}) => {
  const { language, translation } = useLanguage();
  const maintenancesTypes = useMemo(
    (): TypeSelectorOption[] => [
      {
        id: 1,
        label: translation.engineOilChange,
        value: ENGLISH.engineOilChange,
        size: 40,
      },
      {
        id: 2,
        label: translation.refuel,
        value: ENGLISH.refuel,
        size: 25,
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
        label: translation.cabinAirFilterChange,
        value: ENGLISH.cabinAirFilterChange,
      },
      {
        id: 15,
        label: translation.oilFilterChange,
        value: ENGLISH.oilFilterChange,
        size: 25,
      },
      {
        id: 16,
        label: translation.coolantChange,
        value: ENGLISH.coolantChange,
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
        label: translation.brakesAdjustment,
        value: ENGLISH.brakesAdjustment,
        size: 35,
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
        label: translation.motorcycleFuseReplacement,
        value: ENGLISH.motorcycleFuseReplacement,
        size: 25,
      },
      {
        id: 24,
        label: translation.bushingChange,
        value: ENGLISH.bushingChange,
      },
      {
        id: 25,
        label: translation.handleBarChange,
        value: ENGLISH.handleBarChange,
        size: 40,
      },
      {
        id: 26,
        label: translation.motorcycleSeatChange,
        value: ENGLISH.motorcycleSeatChange,
      },
      {
        id: 27,
        label: translation.gearChange,
        value: ENGLISH.gearChange,
        size: 30,
      },
      {
        id: 28,
        label: translation.cablesChange,
        value: ENGLISH.cablesChange,
      },
      {
        id: 29,
        label: translation.grease,
        value: ENGLISH.grease,
      },
      {
        id: 30,
        label: translation.rimsChange,
        value: ENGLISH.rimsChange,
      },
      {
        id: 31,
        label: translation.acRevision,
        value: ENGLISH.acRevision,
        size: 35,
      },
      {
        id: 32,
        label: translation.fuelFilterChange,
        value: ENGLISH.fuelFilterChange,
        size: 35,
      },
      {
        id: 33,
        label: translation.carFusesReplacement,
        value: ENGLISH.carFusesReplacement,
      },
      {
        id: 34,
        label: translation.brakeFluidChange,
        value: ENGLISH.brakeFluidChange,
        size: 35,
      },
      {
        id: 35,
        label: translation.injectorCleaning,
        value: ENGLISH.injectorCleaning,
      },
      {
        id: 36,
        label: translation.hosesReplacement,
        value: ENGLISH.hosesReplacement,
      },
      {
        id: 37,
        label: translation.carburetorReplacement,
        value: ENGLISH.carburetorReplacement,
      },
      {
        id: 38,
        label: translation.motorcycleGripsReplacement,
        value: ENGLISH.motorcycleGripsReplacement,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  );

  return <TypeSelector types={maintenancesTypes} onSelect={onSelect} />;
};
