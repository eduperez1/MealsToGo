import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import * as firebase from 'firebase';

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const firebaseConfig = {
  apiKey: "AIzaSyD_yuJCmDanO7Q_8GftAFEVTClcW-zHDi8",
  authDomain: "mealstogo-3fb47.firebaseapp.com",
  projectId: "mealstogo-3fb47",
  storageBucket: "mealstogo-3fb47.appspot.com",
  messagingSenderId: "293159224934",
  appId: "1:293159224934:web:e75504f3e8a31004cecfa7"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"/>
    </>
  );
}