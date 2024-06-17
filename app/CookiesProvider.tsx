"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CookiesPreferences = {
  isPreferencesOpen: boolean;
  setPreferencesOpen: Dispatch<SetStateAction<boolean>>;
};

export const CookiesContext = createContext<CookiesPreferences | undefined>(
  undefined,
);

export const CookiesProvider = ({ children }: { children: ReactNode }) => {
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);

  return (
    <CookiesContext.Provider value={{ isPreferencesOpen, setPreferencesOpen }}>
      {children}
    </CookiesContext.Provider>
  );
};

export const useCookiesContext = () => {
  const context = useContext(CookiesContext);

  if (!context) {
    throw new Error(
      `${useCookiesContext.name} must be rendered in a descendant of ${CookiesProvider.name}`,
    );
  }

  return context;
};
