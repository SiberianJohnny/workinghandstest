import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { RootNavigationParamsList } from '../types/navigation';

const RootStack = createNativeStackNavigator<RootNavigationParamsList>();

const RootNavigator: React.FC = () => {
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
