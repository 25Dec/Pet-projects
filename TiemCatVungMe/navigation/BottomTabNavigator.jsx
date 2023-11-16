import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreen, ProfileScreen, FavoritesScreen} from '../screens/index';
import {COLORS, SIZES} from '../constants/theme';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.pink900,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingBottom: 5,
          height: 55,
        },
      }}
      sceneContainerStyle={{backgroundColor: COLORS.white800}}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={focused ? COLORS.pink900 : COLORS.black900}
              style={{marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'heart' : 'heart-outline'}
              size={28}
              color={focused ? COLORS.pink900 : COLORS.black900}
              style={{marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={28}
              color={focused ? COLORS.pink900 : COLORS.black900}
              style={{marginTop: 5}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
