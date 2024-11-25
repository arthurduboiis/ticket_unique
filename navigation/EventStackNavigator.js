import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader';
import PaymentSuccess from '../screens/singles/PaymentSuccess';
import SearchScreen from '../screens/loggedStack/SearchScreen';
import { HomePage } from '../componentsV2/pages';


const Stack = createNativeStackNavigator();

function EventStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />, // Utilisez CustomHeader partout par défaut
      }}
    >
    <Stack.Screen name="SearchScreen" component={HomePage} options={
        {headerShown: false}
    } />
    <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} options={{ headerShown: true }}/>

    </Stack.Navigator>
  );
}

export default EventStackNavigator;