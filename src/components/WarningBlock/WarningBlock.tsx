import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const WarningBlock = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default WarningBlock;
