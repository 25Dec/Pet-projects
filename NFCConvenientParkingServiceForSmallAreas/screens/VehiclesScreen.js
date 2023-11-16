import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

import {Colors} from '../constants/colors';
import CustomIconButton from '../components/CustomIconButton';
import VehicleList from '../components/VehicleList';
import CustomBottomSheet from '../components/CustomBottomSheet';
import {showBottomSheet, hideBottomSheet} from '../redux/slices/uiSlice';
import {listenToNfcEventOnce} from '../utils/listenToNfcEventOnce';

const VehiclesScreen = () => {
  let navigation = useNavigation();
  let dispatch = useDispatch();
  let isShowBottomSheet = useSelector(state => state.ui.isShowBottomSheet);

  let addNewVehicle = async () => {
    dispatch(showBottomSheet());

    let nfcTag = await listenToNfcEventOnce();

    if (nfcTag) navigation.navigate('ScanLicensePlateScreen');

    dispatch(hideBottomSheet());
  };

  let searchVehicle = () => {};

  return (
    <View className="relative flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center">
        <Text className="font-bold text-base" style={{color: Colors.Gray.Text}}>
          Total number of vehicles: 3
        </Text>
        <View className="flex-row justify-items-end">
          <CustomIconButton
            name="add"
            size={25}
            style="mr-2"
            onPress={addNewVehicle}
          />
          <CustomIconButton name="search" size={25} onPress={searchVehicle} />
        </View>
      </View>
      <View className="mb-12">
        <VehicleList />
      </View>
      {isShowBottomSheet && (
        <CustomBottomSheet style={{isShowBottomSheet}} options="1" />
      )}
    </View>
  );
};

export default VehiclesScreen;
