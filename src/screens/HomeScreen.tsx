import { useEffect, useState } from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import WarningBlock from '../components/WarningBlock/WarningBlock';

const HomeScreen = () => {
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  Geolocation.getCurrentPosition(info => console.log(info));

  const requestGeolocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'This App needs access to your geolocation.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      setLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {!locationPermission ? <WarningBlock /> : <Text>Home Screen</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
