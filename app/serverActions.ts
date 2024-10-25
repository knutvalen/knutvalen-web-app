"use server";

import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { Cookie } from "@/app/models/Cookie";
import { CookieNames } from "@/app/models/CookieNames";

export const setCookies = async (_cookies: Cookie[]) => {
  const cookieStore = await cookies();

  _cookies.forEach((cookie) => {
    cookieStore.set({
      name: cookie.name,
      value: String(cookie.consent),
      expires: new Date().setFullYear(new Date().getFullYear() + 1),
    });
  });
};

export const getAllCookies = async (): Promise<Cookie[]> => {
  const cookieStore = await cookies();

  return cookieStore.getAll().map((cookie) => ({
    name: cookie.name as CookieNames,
    consent: cookie.value === "true",
  }));
};

export const getCookie = async (
  name: CookieNames,
  cookieStore: ReadonlyRequestCookies,
): Promise<Cookie | undefined> => {
  const cookie = cookieStore.get(name);
  if (cookie) {
    return {
      name: cookie.name as CookieNames,
      consent: cookie.value === "true",
    };
  }

  return undefined;
};

export const hasCookie = async (
  name: CookieNames,
  cookieStore: ReadonlyRequestCookies,
): Promise<boolean> => {
  return cookieStore.has(name);
};
