import {View, Text, Pressable} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../constants/colors';

const SingleVehicle = ({item}) => {
  return (
    <View
      className="flex-1 h-24 mx-4 mb-4 rounded-xl overflow-hidden shadow-md"
      style={{backgroundColor: Colors.Gray.Gray100}}>
      <Pressable
        android_ripple={{color: Colors.Gray.Gray300}}
        className="flex-1 px-3 py-2 flex-row justify-between items-center">
        <View className="">
          <Fontisto name="motorcycle" size={35} />
        </View>
        <View className="">
          <Text></Text>
          <Text></Text>
        </View>
        <View className="">
          <Text>2</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SingleVehicle;
