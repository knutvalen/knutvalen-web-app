"use server";

import { cookies } from "next/headers";

export const setConsentCookie = async ({ consent }: { consent: boolean }) => {
  cookies().set("consentCookie", String(consent));
};

export const hasConsentCookie = async () => {
  return cookies().has("consentCookie");
};
