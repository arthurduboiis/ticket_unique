import React from "react";
import { Native } from "../../nanites";
import switchTheme from "react-native-theme-switch-animation";
import { Button, Image, Pressable } from "react-native";
import { useThemeStore } from "../../../store/ThemeStore";

const SwitchDarkLightMode = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [localTheme, setLocalTheme] = React.useState(theme);
  return (
    <Pressable
      title=""
      style={{
        alignSelf: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        switchTheme({
          switchThemeFunction: () => {
            toggleTheme();
            setLocalTheme(localTheme === 'dark' ? 'light' : 'dark');
          },
          animationConfig: {
            type: "fade",
            duration: 900,
          },
        });
      }}
    >
      {localTheme === 'light' ? (
        <Image source={require('../../../assets/moon_light.png')} style={{width: 40, height: 40}}/>
      ) : (
        <Image source={require('../../../assets/moon.png')} style={{width: 40, height: 40, backgroundColor: 'white', borderRadius: 10}}/>
      )}
    </Pressable>  );
};

export default SwitchDarkLightMode;
