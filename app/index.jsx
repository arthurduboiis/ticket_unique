import { useEffect } from "react";
import { Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAuthStore from "../store/authStore";
import MainLayout from "../navigation/MainLayout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "../navigation/CustomHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import { AppState } from "react-native";

import {
  LoginPage,
  PasswordForgottenPage,
  SignupPage,
} from "../componentsV2/pages/auth";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const theme = {
  container: {
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      yellow: "#99CCFF",
      primaryDark: "#030303",
      primaryLight: "#FFFFFF",
      secondaryLight: "#F2F2F2",
      secondaryDark: "#141414",
      thirdDark: "#282828",
      dimmedLight: "#7E7E7E",
    },
    padding: { horizontal: "20px", vertical: "10px" },
    button: {
      padding: {
        horizontal: "30px",
        vertical: "10px",
      },
      borderRadius: "100px",
    },
    tag: {
      padding: {
        horizontal: "15px",
        vertical: "7px",
      },
    },
  },
};

export default function Page() {
  const { user } = useAuthStore();

  const hideNavBar = async () => {
    // Prevent content from moving up when bar is shown
    await NavigationBar.setPositionAsync("absolute");

    // Hide bottom bar
    await NavigationBar.setVisibilityAsync("hidden");

    // Show the bar when user swipes
    await NavigationBar.setBehaviorAsync("overlay-swipe");
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      const handleAppStateChange = (nextAppState) => {
        // If app is being used, hide nav bar
        if (nextAppState === "active") {
          hideNavBar();
        }
      };

      // Subscribe to app state changes
      const appStateSubscription = AppState.addEventListener(
        "change",
        handleAppStateChange
      );

      // Clean up the event listener when the component unmounts
      return () => {
        appStateSubscription.remove();
      };
    }
  }, []);
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer independent={true}>
            {user ? <MainStackNavigator /> : <AuthStackNavigator />}
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const AuthStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <CustomHeader {...props} />,
      contentStyle: { backgroundColor: "#030303" },
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{
        headerShown: false,
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
    />
    <Stack.Screen
      name="Register"
      component={SignupPage}
      options={{
        headerShown: false,
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
    />
    <Stack.Screen name="ForgotPassword" component={PasswordForgottenPage} />
  </Stack.Navigator>
);

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="MainLayout"
    screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
  >
    <Stack.Screen name="MainLayout" component={MainLayout} />
    {/* <Stack.Screen name="Event" component={Event} /> */}
  </Stack.Navigator>
);
