import { useEffect, useState } from 'react';
import { View, PermissionsAndroid, StyleSheet } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import WarningBlock from '../components/WarningBlock/WarningBlock';
import { useGetShiftsQuery } from '../../store/api/shiftsApi';
import ShiftsList from '../components/ShiftsList/ShiftsList';

const HomeScreen = () => {
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [currentPosition, setCurrentPosition] = useState<GeolocationResponse>();

  const {
    data: shiftsData,
    isLoading: isShiftsDataLoading,
    isFetching: isShiftsDataFetching,
  } = useGetShiftsQuery({
    latitude: currentPosition?.coords.latitude.toString(),
    longitude: currentPosition?.coords.longitude.toString(),
  });

  console.log(currentPosition, shiftsData);

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
    Geolocation.getCurrentPosition(info => setCurrentPosition(info));
  }, []);

  return (
    <View style={styles.container}>
      {!locationPermission ? (
        <WarningBlock />
      ) : (
        <ShiftsList listData={shiftsData} />
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
});

export default HomeScreen;
