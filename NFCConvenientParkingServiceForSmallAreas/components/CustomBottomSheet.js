import {useEffect, useState} from 'react';
import {View, Text, Pressable, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

import {Colors} from '../constants/colors';
import SecondaryButton from './SecondaryButton';
import {hideBottomSheet} from '../redux/slices/uiSlice';

const CustomBottomSheet = ({options}) => {
  let navigation = useNavigation();
  let dispatch = useDispatch();

  let hide = () => {
    dispatch(hideBottomSheet());
  };

  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.Gray.Gray700);
    navigation.setOptions({tabBarStyle: {display: 'none'}});

    return () => {
      StatusBar.setBackgroundColor(Colors.Gray.Gray300);
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    };
  }, []);

  return (
    <Pressable
      className="absolute w-full h-full justify-center items-center"
      style={{backgroundColor: Colors.Gray.Gray700}}
      onPress={hide}>
      <View
        className="absolute pt-3 rounded-t-3xl bottom-0 w-full h-96 justify-between items-center"
        style={{backgroundColor: Colors.Gray.Gray100}}>
        <Text className="text-2xl" style={{color: Colors.Gray.Text}}>
          Ready to Scan
        </Text>
        <MaterialCommunityIcon
          name="nfc"
          size={50}
          color={Colors.Green.Green300}
          className="animate-ping"
        />
        <Text className="text-base" style={{color: Colors.Gray.Text}}>
          Hold your device near the NFC tag
        </Text>
        <SecondaryButton title="Cancel" style="mb-4" onPress={hide} />
      </View>
    </Pressable>
  );
};

export default CustomBottomSheet;
