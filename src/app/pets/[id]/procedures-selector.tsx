import { FC, useMemo } from "react";

import { useLanguage } from "@/contexts";
import { TypeSelector } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { ENGLISH } from "@/contexts/language/constants/english.constants";

interface IProceduresSelectorProps {
  onSelect: (type: ITypeSelectorOption) => void;
}

export const ProceduresSelector: FC<IProceduresSelectorProps> = ({ onSelect }) => {
  const { language, translation } = useLanguage();
  const proceduresTypes = useMemo(() => {
    const types: ITypeSelectorOption[] = [
      {
        id: 1,
        label: translation.vaccine,
        value: ENGLISH.vaccine,
      },
      {
        id: 2,
        label: translation.dewormer,
        value: ENGLISH.dewormer,
      },
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector
      types={proceduresTypes}
      showSearchInput
      onSelect={onSelect}
    />
  );
};
