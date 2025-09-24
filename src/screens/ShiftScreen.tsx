import { View, Text } from 'react-native';
import React from 'react';
import { ShiftScreenProps } from '../types/navigation';

const ShiftScreen = ({ navigation, route }: ShiftScreenProps) => {
  const { shift } = route.params;

  return (
    <View>
      <Text>ShiftScreen</Text>
    </View>
  );
};

export default ShiftScreen;
