import {useState} from 'react';
import {View, Text, TextInput, Image, Pressable, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PrimaryButton from '../components/PrimaryButton';
import {Colors} from '../constants/colors';
import BackButton from '../components/BackButton';

const SignInScreen = () => {
  let navigation = useNavigation();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let emailChangeHandler = email => setEmail(email);

  let passwordChangeHandler = password => setPassword(password);

  let handleSubmit = () => {
    if (email && password) {
    } else {
      navigation.navigate('BottomNavigation');
    }
  };

  return (
    <Pressable
      onPress={Keyboard.dismiss}
      className="flex-1 mt-3 justify-between">
      <View className="relative mx-4 items-center">
        <BackButton />
        <Text
          className="text-2xl font-extrabold"
          style={{color: `${Colors.Gray.Text}`}}>
          Sign In
        </Text>
      </View>
      <View className="mx-4 items-center">
        <Image
          source={require('../assets/images/1.png')}
          className="w-96 h-96"
        />
      </View>
      <View className="mx-4">
        <Text
          className="font-bold text-lg mb-2"
          style={{color: `${Colors.Gray.Text}`}}>
          Email
        </Text>
        <TextInput
          onChangeText={emailChangeHandler}
          className="rounded-full px-4"
          style={{
            color: `${Colors.Gray.Text}`,
            backgroundColor: `${Colors.Gray.Gray200}`,
          }}
        />
        <Text
          className="font-bold text-lg mt-4 mb-2"
          style={{color: `${Colors.Gray.Text}`}}>
          Password
        </Text>
        <TextInput
          onChangeText={passwordChangeHandler}
          className="rounded-full px-4 mb-5"
          style={{
            color: `${Colors.Gray.Text}`,
            backgroundColor: `${Colors.Gray.Gray200}`,
          }}
          secureTextEntry
        />
        <PrimaryButton title="Sign In" onPress={handleSubmit} style="mb-4" />
      </View>
    </Pressable>
  );
};

export default SignInScreen;
