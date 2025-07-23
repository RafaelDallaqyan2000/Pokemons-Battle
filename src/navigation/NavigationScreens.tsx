import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BattleScreen, StatisticsScreen } from '../screens';

export type RootStackParamList = {
  BattleScreen: undefined;
  StatisticsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BattleScreen">
        <Stack.Screen
          name="BattleScreen"
          component={BattleScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatisticsScreen"
          component={StatisticsScreen}
          options={{ headerTitle: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
