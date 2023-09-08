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
      {
        id: 3,
        label: translation.hairCut,
        value: ENGLISH.hairCut,
      },
      {
        id: 4,
        label: translation.nailsCut,
        value: ENGLISH.nailsCut,
      },
      {
        id: 5,
        label: translation.bath,
        value: ENGLISH.bath,
        height: 35,
        width: 35,
      },
      {
        id: 6,
        label: translation.hairBrushing,
        value: ENGLISH.hairBrushing,
      },
      {
        id: 7,
        label: translation.pills,
        value: ENGLISH.pills,
      },
      {
        id: 8,
        label: translation.surgery,
        value: ENGLISH.surgery,
      },
    ];
    return types;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <TypeSelector
      types={proceduresTypes}
      onSelect={onSelect}
    />
  );
};
