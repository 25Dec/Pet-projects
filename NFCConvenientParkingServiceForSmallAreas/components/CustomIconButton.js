import {View, Pressable} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';

const CustomIconButton = ({name, size, style, onPress}) => {
  return (
    <View
      className={style}
      style={{
        backgroundColor: Colors.Gray.Gray400,
        borderRadius: 99,
        overflow: 'hidden',
      }}>
      <Pressable
        onPress={onPress}
        className="p-2"
        android_ripple={{color: Colors.Gray.Gray500}}>
        <Ionicon name={name} color={Colors.Gray.Text} size={size} />
      </Pressable>
    </View>
  );
};

export default CustomIconButton;
