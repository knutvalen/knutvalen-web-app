import { CookieNames } from "@/app/models/CookieNames";

export type Cookie = {
  name: CookieNames;
  consent: boolean;
};
