import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Pressable,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/colors';
import CustomIconButton from '../components/CustomIconButton';

const ScanLicensePlateScreen = () => {
  let navigation = useNavigation();
  let devices = useCameraDevices();
  let device = devices.back;
  let isFocused = useIsFocused();
  let [isFlashlightOn, setIsFlashlightOn] = useState(false);

  let moveToVehiclesScreen = () => {
    navigation.goBack();
    NfcManager.unregisterTagEvent();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  let toggleFlashLight = () => setIsFlashlightOn(!isFlashlightOn);

  useEffect(() => {
    let requestCamera = async () => {
      let cameraPermission = await Camera.getCameraPermissionStatus();

      if (cameraPermission == 'denied') await Camera.requestCameraPermission();
    };

    requestCamera();
  }, []);

  if (device == null) {
    return <ActivityIndicator size={20} color={'red'} />;
  }

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <View className="flex-1 relative">
        {isFocused && (
          <Camera
            style={StyleSheet.absoluteFill}
            isActive={true}
            device={device}
            torch={isFlashlightOn ? 'on' : 'off'}
          />
        )}
        <View className="mx-4">
          <CustomIconButton
            name="chevron-back"
            size={25}
            style="absolute left-0 top-11"
            onPress={moveToVehiclesScreen}
          />
          <CustomIconButton
            name="flashlight"
            size={25}
            style="absolute right-0 top-11"
            onPress={toggleFlashLight}
          />
        </View>
        <View></View>
      </View>
    </>
  );
};

export default ScanLicensePlateScreen;
