import React from "react";
import { Native } from "../../nanites";
import switchTheme from "react-native-theme-switch-animation";
import { Button } from "react-native";
import { useThemeStore } from "../../../store/ThemeStore";

const SwitchDarkLightMode = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <Button
      title="Switch Theme"
      style={{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 1.2, // -> Add This
        padding: 20,
        marginBottom: 20,
      }}
      onPress={() => {
        switchTheme({
          switchThemeFunction: () => {
            toggleTheme();
          },
          animationConfig: {
            type: "fade",
            duration: 900,
          },
        });
      }}
    />
  );
};

export default SwitchDarkLightMode;
