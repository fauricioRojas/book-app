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
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector types={maintenancesTypes} onSelect={onSelect} />
  );
};
