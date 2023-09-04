"use client";

import { useMemo } from "react";

import { useLanguage } from "@/contexts";

export const useFormRules = () => {
  const { language, translation } = useLanguage();

  const formRules = useMemo(
    () => ({
      REQUIRED: {
        required: translation.required,
      },
      EMAIL: {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: translation.validEmail,
        },
      },
      PHONE_NUMBER: {
        pattern: {
          value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i,
          message: translation.validPhoneNumber,
        },
      },
      YEAR: {
        pattern: {
          value: /[0-9]{4}/,
          message: translation.validYear,
        },
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );

  return formRules;
};
