import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PrimaryButton from '../components/PrimaryButton';
import {Colors} from '../constants/colors';

const WelcomeScreen = () => {
  let navigation = useNavigation();

  let moveToSignInScreen = () => navigation.navigate('SignInScreen');

  return (
    <View className="w-full h-full justify-between items-center">
      <View className="items-center mx-4">
        <Image
          source={require('../assets/images/welcome.gif')}
          className="w-96 h-96"
        />
        <Text
          className="mt-12 text-2xl font-extrabold text-center"
          style={{color: `${Colors.Gray.Text}`}}>
          NFC Convenient Parking Service For Small Areas
        </Text>
      </View>
      <View className="items-center mb-4">
        <PrimaryButton title="Sign In" onPress={moveToSignInScreen} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
