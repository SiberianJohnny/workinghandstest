import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { IGetShifts, IShift } from '../../types/responses';
import { useNavigation } from '@react-navigation/native';
import {
  IRootNavigationProps,
  RootNavigationParamsList,
} from '../../types/navigation';

interface IProps {
  listData: IGetShifts | undefined;
}

const ShiftsList = ({ listData }: IProps) => {
  const navigation = useNavigation<IRootNavigationProps>();

  const navigateToScreen = (shiftData: IShift) => {
    navigation.navigate('Shift', { shift: shiftData });
  };

  const renderItem: ListRenderItem<IShift> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.shiftItem}
        onPress={() => navigateToScreen(item)}
      >
        <View style={styles.shiftItemInfo}>
          <Text style={styles.shiftItemTitle}>{item.companyName}</Text>
          <Image
            source={{ uri: item.logo }}
            style={{ width: 32, height: 32, borderRadius: 8 }}
          />
        </View>
        <View style={styles.shiftItemInfo}>
          <Text>Требуется чел.: {item.planWorkers}</Text>
          <Text>Сейчас чел.: {item.currentWorkers}</Text>
          <Text>Стоимость: {item.priceWorker}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (!listData) return <Text>Нет данных о сменах</Text>;

  return (
    <FlatList
      contentContainerStyle={{
        paddingVertical: 8,
        rowGap: 12,
      }}
      data={listData?.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  shiftItem: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    gap: 8,
  },
  shiftItemTitle: {},
  shiftItemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
});

export default ShiftsList;
