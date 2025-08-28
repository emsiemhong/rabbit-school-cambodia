/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/locales/en.json";
import km from "@/locales/km.json";

type LangType = "en" | "km";

interface LanguageContextProps {
  language: LangType;
  setLanguage: (lang: LangType) => void;
  t: (key: string) => string;
  locale: string; 
}

const translations: Record<LangType, any> = { en, km };

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LangType>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LangType | null;
    if (savedLang) setLanguageState(savedLang);
  }, []);

  const setLanguage = (lang: LangType) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let result: any = translations[language];
    for (let k of keys) {
      if (result[k] !== undefined) result = result[k];
      else return key;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, locale: language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
