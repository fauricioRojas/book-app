import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { TypeSelectorOption } from "@/shared/types";
import { ENGLISH } from "@/contexts/language/constants/english.constants";

type VehiclesSelectorProps = {
  onSelect: (type: TypeSelectorOption) => void;
}

export const VehiclesSelector: FC<VehiclesSelectorProps> = ({ onSelect }) => {
  const { language, translation } = useLanguage();
  const vehiclesTypes = useMemo((): TypeSelectorOption[] => [
    {
      id: 1,
      label: translation.bike,
      value: ENGLISH.bike,
    },
    {
      id: 2,
      label: translation.motorcycle,
      value: ENGLISH.motorcycle,
    },
    {
      id: 3,
      label: translation.car,
      value: ENGLISH.car,
    },
    {
      id: 4,
      label: translation.truck,
      value: ENGLISH.truck,
    },
    {
      id: 5,
      label: translation.pickup,
      value: ENGLISH.pickup,
    },
    {
      id: 6,
      label: translation.tractor,
      value: ENGLISH.tractor,
    },
    {
      id: 7,
      label: translation.trailer,
      value: ENGLISH.trailer,
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [language]);

  return (
    <TypeSelector
      types={vehiclesTypes}
      onSelect={onSelect}
    />
  );
};
