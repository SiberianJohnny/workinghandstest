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
      {!locationPermission ? (
        <View style={styles.warningBlock}>
          <Text style={styles.warningText}>
            Для работы приложения необходимо предоставить доступ к геолокации
          </Text>
          <TouchableOpacity
            style={styles.requestPermissionButton}
            onPress={Linking.openSettings}
          >
            <Text style={styles.requestPermissionButtonText}>
              Предоставить доступ
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Home Screen</Text>
      )}
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
  warningBlock: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
  warningText: {
    fontSize: 16,
    textAlign: 'center',
  },
  requestPermissionButton: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  requestPermissionButtonText: {
    color: '#FFF',
  },
});

export default HomeScreen;
