import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { ENGLISH } from "@/contexts/language/constants/english.constants";

interface IVehiclesSelectorProps {
  onSelect: (type: ITypeSelectorOption) => void;
}

export const VehiclesSelector: FC<IVehiclesSelectorProps> = ({ onSelect }) => {
  const { language, translation } = useLanguage();
  const vehiclesTypes = useMemo(() => {
    const types: ITypeSelectorOption[] = [
      {
        id: 1,
        label: translation.car,
        value: ENGLISH.car,
      },
      {
        id: 2,
        label: translation.motorcycle,
        value: ENGLISH.motorcycle,
      },
      {
        id: 3,
        label: translation.truck,
        value: ENGLISH.truck,
      },
      {
        id: 4,
        label: translation.pickup,
        value: ENGLISH.pickup,
        width: 35,
        height: 35,
      },
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector types={vehiclesTypes} onSelect={onSelect} />
  );
};
