import {View, Text, Pressable} from 'react-native';

import {Colors} from '../constants/colors';

const PrimaryButton = ({title, style, onPress}) => {
  return (
    <View
      className={`w-80 overflow-hidden rounded-full ${style}`}
      style={{backgroundColor: `${Colors.Green.Green300}`}}>
      <Pressable
        onPress={onPress}
        className="p-2"
        android_ripple={{color: Colors.Gray.Gray100}}>
        <Text
          className="font-extrabold text-center text-lg"
          style={{color: `${Colors.Gray.Text}`}}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
