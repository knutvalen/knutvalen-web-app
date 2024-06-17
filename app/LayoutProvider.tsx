"use client";

import { ReactNode, useContext, useEffect } from "react";
import { CookiePreferences } from "@/app/composistions/CookiePreferences";
import { FirebaseContext } from "@/app/api/FirebaseProvider";
import {
  getAnalytics,
  isSupported,
  setAnalyticsCollectionEnabled,
} from "@firebase/analytics";
import { Cookie } from "@/app/serverActions";

export const LayoutProvider = ({
  children,
  analyticsCookie,
}: {
  children: ReactNode;
  analyticsCookie?: Cookie;
}) => {
  const firebaseApp = useContext(FirebaseContext);

  useEffect(() => {
    if (analyticsCookie?.consent === false) {
      setAnalyticsCollectionEnabled(getAnalytics(firebaseApp), false);
    } else {
      isSupported().then((yes) => yes && getAnalytics(firebaseApp));
    }
  }, [firebaseApp, analyticsCookie]);

  return (
    <>
      {children}
      <CookiePreferences />
    </>
  );
};
