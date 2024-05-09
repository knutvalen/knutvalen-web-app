"use client";

import { Context, createContext, ReactNode, useContext } from "react";
import { FirebaseApp, initializeApp } from "@firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "@firebase/app-check";

const firebaseConfigDevelopment = {
  apiKey: "AIzaSyDmWmlzDad5wPysK_ULKf8Nzkf1SBel1cc",
  authDomain: "knut-valen-app-development.firebaseapp.com",
  projectId: "knut-valen-app-development",
  storageBucket: "knut-valen-app-development.appspot.com",
  messagingSenderId: "859286345910",
  appId: "1:859286345910:web:c8da5c446fd473d383ae17",
};

const firebaseConfig = {
  apiKey: "AIzaSyBEUMmdeDLJ5QZVVSkUMSakuH88vmD9PlQ",
  authDomain: "knut-valen-app.firebaseapp.com",
  projectId: "knut-valen-app",
  storageBucket: "knut-valen-app.appspot.com",
  messagingSenderId: "541102216892",
  appId: "1:541102216892:web:4cb4a31839542af713e2b9",
  measurementId: "G-6LVWVS252E",
};

const getFirebaseContext = (): Context<FirebaseApp> => {
  if (process.env.NODE_ENV === "development") {
    return createContext(initializeApp(firebaseConfigDevelopment));
  } else {
    const app = initializeApp(firebaseConfig);
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(
        process.env.RE_CAPTCHA_ENTERPRISE_SITE_KEY as string,
      ),
      isTokenAutoRefreshEnabled: true,
    });
    return createContext(app);
  }
};

export const FirebaseContext = getFirebaseContext();

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FirebaseContext.Provider value={useContext(FirebaseContext)}>
      {children}
    </FirebaseContext.Provider>
  );
};
