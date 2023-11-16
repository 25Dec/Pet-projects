import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import {COLORS} from '../constants/theme';
import {
  SignInScreen,
  SignUpScreen,
  CartScreen,
  ProductDetailsScreen,
  SearchScreen,
  ChatScreen,
  CheckoutScreen,
  ProductsScreen,
  PurchaseHistoryScreen,
  SettingScreen,
} from '../screens/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: COLORS.white800},
          animation: 'none',
        }}
        initialRouteName="SignIn">
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />

        <Stack.Screen name="SignIn" component={SignInScreen} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen
          name="PurchaseHistory"
          component={PurchaseHistoryScreen}
        />

        <Stack.Screen name="Cart" component={CartScreen} />

        <Stack.Screen name="Products" component={ProductsScreen} />

        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />

        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Chat" component={ChatScreen} />

        <Stack.Screen name="Checkout" component={CheckoutScreen} />

        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
