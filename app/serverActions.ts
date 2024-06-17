"use server";

import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type cookieNames = "necessary" | "googleAnalytics";
export type Cookie = {
  name: cookieNames;
  consent: boolean;
};

export const setCookies = async (_cookies: Cookie[]) => {
  const cookieStore = cookies();

  _cookies.forEach((cookie) => {
    cookieStore.set({
      name: cookie.name,
      value: String(cookie.consent),
      expires: new Date().setFullYear(new Date().getFullYear() + 1),
    });
  });
};

export const getAllCookies = async (): Promise<Cookie[]> => {
  const cookieStore = cookies();

  return cookieStore.getAll().map((cookie) => ({
    name: cookie.name as cookieNames,
    consent: cookie.value === "true",
  }));
};

export const getCookie = async (
  name: cookieNames,
  cookieStore: ReadonlyRequestCookies,
): Promise<Cookie | undefined> => {
  const cookie = cookieStore.get(name);
  if (cookie) {
    return {
      name: cookie.name as cookieNames,
      consent: cookie.value === "true",
    };
  }

  return undefined;
};

export const hasCookie = async (
  name: cookieNames,
  cookieStore: ReadonlyRequestCookies,
): Promise<boolean> => {
  return cookieStore.has(name);
};
