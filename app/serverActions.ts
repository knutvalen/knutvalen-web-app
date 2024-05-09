"use server";

import { cookies } from "next/headers";

export const setConsentCookie = ({ consent }: { consent: boolean }) => {
  cookies().set("consentCookie", String(consent));
};

export const hasConsentCookie = (): Boolean => {
  return cookies().has("consentCookie");
};
