import { Stack, SplashScreen } from "expo-router";
import "../global.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "../context/GlobalProvider"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error

    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if(!fontsLoaded) return null

  if(!fontsLoaded && !error) return null


  return (
    <GlobalProvider>
    <Stack>
      <Stack.Screen name="index" options={ {headerShown: false} }/>

      <Stack.Screen name="(auth)" options={ {headerShown: false} }/>

      <Stack.Screen name="(tabs)" options={ {headerShown: false} }/>

      <Stack.Screen name="search/[query]" options={ {headerShown: false} }/>
    </Stack>
    </GlobalProvider>
  )
}
