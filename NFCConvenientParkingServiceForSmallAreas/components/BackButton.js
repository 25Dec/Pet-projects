import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';

const BackButton = () => {
  let navigaton = useNavigation();

  let goBack = () => navigaton.goBack();

  return (
    <View className="absolute left-0 top-0">
      <Pressable onPress={goBack}>
        <Ionicon name="chevron-back" color={Colors.Gray.Text} size={30} />
      </Pressable>
    </View>
  );
};

export default BackButton;
