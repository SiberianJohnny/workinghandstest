import { ComponentType } from 'react';
import { IShift } from './responses';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootNavigationParamsList = {
  Home: undefined;
  Shift: { shift: IShift };
};

export interface IRootNavigationScreens {
  name: keyof RootNavigationParamsList;
  screen: React.FC<any>;
  icon: ComponentType<any>;
}

export type IRootNavigationProps =
  NativeStackNavigationProp<RootNavigationParamsList>;

export type RootNavigationProps = {
  navigation: IRootNavigationProps;
};

export type ShiftScreenNavigationProp = NativeStackNavigationProp<
  RootNavigationParamsList,
  'Shift'
>;

export type ShiftScreenRouteProp = RouteProp<RootNavigationParamsList, 'Shift'>;

export type ShiftScreenProps = {
  navigation: ShiftScreenNavigationProp;
  route: ShiftScreenRouteProp;
};
