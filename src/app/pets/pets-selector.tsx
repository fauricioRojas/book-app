import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { ENGLISH } from "@/contexts/language/constants/english.constants";

interface IPetsSelectorProps {
  onSelect: (type: ITypeSelectorOption) => void;
}

export const PetsSelector: FC<IPetsSelectorProps> = ({ onSelect }) => {
  const { language, translation } = useLanguage();
  const petsTypes = useMemo(() => {
    const types: ITypeSelectorOption[] = [
      {
        id: 1,
        label: translation.dog,
        value: ENGLISH.dog,
      },
      {
        id: 2,
        label: translation.cat,
        value: ENGLISH.cat,
      },
      {
        id: 3,
        label: translation.bull,
        value: ENGLISH.bull,
        height: 35,
        width: 35,
      },
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector types={petsTypes} onSelect={onSelect} />
  );
};
