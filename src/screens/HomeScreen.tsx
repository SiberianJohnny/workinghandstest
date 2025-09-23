import * as React from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  Geolocation.getCurrentPosition(info => console.log(info));

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
