import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ShiftScreenProps } from '../types/navigation';

const ShiftScreen = ({ navigation, route }: ShiftScreenProps) => {
  const { shift } = route.params;

  return (
    <ScrollView style={styles.shift}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Text style={styles.backButtonText}>НАЗАД</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Image source={{ uri: shift.logo }} style={styles.imageStyles} />
        <Text>Компания: {shift.companyName}</Text>
        <Text>id: {shift.id}</Text>
      </View>

      <Text>Адрес: {shift.address}</Text>

      <View style={styles.workersInfo}>
        <Text>Текущие работники: {shift.currentWorkers}</Text>
        <Text>Необходимо работников: {shift.planWorkers}</Text>

        <View style={styles.priceBlock}>
          <Text>Стоимость работы: {shift.priceWorker}</Text>
          <Text>
            Бонус: {shift.bonusPriceWorker ? shift.bonusPriceWorker : 'Нет'}
          </Text>
        </View>

        <View>
          <Text>Дата начала работы: {shift.dateStartByCity}</Text>
          <Text>Время конца работы: {shift.timeEndByCity}</Text>
          <Text>Время начала работы: {shift.timeStartByCity}</Text>
        </View>
      </View>

      <Text>Количество отзывов: {shift.customerFeedbacksCount}</Text>
      <Text>
        Рейтинг:{' '}
        {shift.customerRating ? shift.customerRating : 'Недостаточно отзывов'}
      </Text>

      <Text>isPromotionEnabled: {shift.isPromotionEnabled ? 'Да' : 'Нет'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shift: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    margin: 16,
    padding: 24,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2e2828ff',
    borderRadius: 8,
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
    gap: 6,
  },
  imageStyles: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },
  workersInfo: {
    marginVertical: 24,
  },
  priceBlock: {
    marginVertical: 16,
  },
});

export default ShiftScreen;
