import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import EditPreference from '../screens/singles/EditPreferences';
// import ChangePassword from '../screens/singles/ChangePassword';
// import EditInterests from '../screens/singles/EditInterests';
// import OldEvent from '../screens/singles/OldEvent';
// import MyWallet from '../screens/singles/MyWallet';
// import MyTransactions from '../screens/singles/MyTransactions';
// import ProfileScreen from '../screens/loggedStack/ProfileScreen';
// import Settings from '../screens/singles/Settings';
// import OldEventDetails from '../screens/singles/OldEventDetails';
// import Transaction from '../screens/singles/Transaction';
// import FavEvent from '../screens/singles/FavEvent';

import CustomHeader from './CustomHeader';
import { Profile, ProfilePage } from '../componentsV2/pages';

const Stack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />, // Utilisez CustomHeader partout par défaut
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="FavEvent"
        component={FavEvent}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MyWallet"
        component={MyWallet}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MyTransactions"
        component={MyTransactions}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="EditPreferences"
        component={EditPreference}
        options={{
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          headerShown: true,
        }}
      /> */}
      <Stack.Screen
        name="Settings"
        component={Profile.Settings}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="EditInterests" component={EditInterests} />
      <Stack.Screen
        name="OldEvent"
        component={OldEvent}
        options={{
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="OldEventDetails"
        component={OldEventDetails}
        options={{ headerShown: true }}
      /> */}
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
