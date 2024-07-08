"use client";
import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  return {
    t,
    lang,
  };
};
