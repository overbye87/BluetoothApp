import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import { DeviceList } from '../screens/DeviceList/DeviceList';

export type AppStackParamList = {
  Main: undefined,
  DeviceList: undefined,
};

type ScreenKeys = keyof AppStackParamList;
export type RouteAppStack<T extends ScreenKeys> = RouteProp<AppStackParamList, T>;
export type NavigationAppStack<T extends ScreenKeys> = NativeStackNavigationProp<
AppStackParamList,
  T
>;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="DeviceList"
          component={DeviceList}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;