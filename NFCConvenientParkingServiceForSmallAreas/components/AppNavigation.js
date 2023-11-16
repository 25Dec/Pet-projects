import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CardsScreen from '../screens/CardsScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import AccountScreen from '../screens/AccountScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import ScanLicensePlateScreen from '../screens/ScanLicensePlateScreen';
import MembershipRewardsScreen from '../screens/MembershipRewardsScreen';
import {Colors} from '../constants/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="VehiclesScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.Gray.Gray100,
          paddingTop: 5,
        },
        tabBarActiveTintColor: Colors.Green.Green300,
        tabBarLabelStyle: {
          fontSize: 11,
          paddingBottom: 5,
        },
      }}
      sceneContainerStyle={{backgroundColor: Colors.Gray.Gray300}}>
      <Tab.Screen
        name="CardsScreen"
        component={CardsScreen}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: ({focused}) => (
            <Ionicon
              name={focused ? 'card' : 'card-outline'}
              size={25}
              color={focused ? Colors.Green.Green300 : Colors.Gray.Text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VehiclesScreen"
        component={VehiclesScreen}
        options={{
          tabBarLabel: 'Vehicles',
          tabBarIcon: ({focused}) => (
            <Ionicon
              name={focused ? 'bicycle' : 'bicycle-outline'}
              size={25}
              color={focused ? Colors.Green.Green300 : Colors.Gray.Text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MembershipRewardsScreen"
        component={MembershipRewardsScreen}
        options={{
          tabBarLabel: 'Membership',
          tabBarIcon: ({focused}) => (
            <Ionicon
              name={focused ? 'gift' : 'gift-outline'}
              size={25}
              color={focused ? Colors.Green.Green300 : Colors.Gray.Text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <Ionicon
              name={focused ? 'person' : 'person-outline'}
              size={25}
              color={focused ? Colors.Green.Green300 : Colors.Gray.Text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
          safeAreaInsets: {top: 0},
          contentStyle: {backgroundColor: Colors.Gray.Gray300},
        }}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="ScanLicensePlateScreen"
          component={ScanLicensePlateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
