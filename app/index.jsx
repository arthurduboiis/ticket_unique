import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAuthStore from "../store/authStore";
import MainLayout from '../navigation/MainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from "../navigation/CustomHeader";


const Stack = createNativeStackNavigator();


const theme = {
  container: {
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      yellow: "#FFFF66",
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
  if(user) {
    return (
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView>
          <View>
            <Text>Welcome {user.name}</Text>
          </View>
        </GestureHandlerRootView>
      </ThemeProvider>
    );
  }
  else {
    return <View><Text>test 
      </Text></View>;
  }
  

}

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="MainLayout"
    screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
  >
    <Stack.Screen name="MainLayout" component={MainLayout} />
    {/* <Stack.Screen name="Event" component={Event} /> */}
  </Stack.Navigator>
);

