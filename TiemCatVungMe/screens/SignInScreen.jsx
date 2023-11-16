import {
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, SIZES} from '../constants/theme';

const SignInScreen = () => {
  let navigation = useNavigation();

  let moveToHomeScreen = () => {
    navigation.navigate('BottomTab');
  };

  let moveToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.signInContainer}>
      <View
        style={[
          styles.subContainer(
            'row',
            'space-between',
            'center',
            SIZES.medium,
            SIZES.medium,
          ),
          {paddingBottom: 10},
        ]}>
        <View style={styles.backIcon}>
          <Pressable onPress={moveToHomeScreen}>
            <Ionicons name="arrow-back" size={28} color={COLORS.pink900} />
          </Pressable>
          <Text
            style={{
              fontSize: SIZES.large,
              marginLeft: SIZES.small,
              color: COLORS.black900,
            }}>
            Đăng nhập
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={[
          styles.subContainer(
            'column',
            'center',
            'center',
            SIZES.small,
            SIZES.medium,
          ),
        ]}>
        <View
          style={[
            styles.subContainer('row', 'space-between', 'center', 0, 0),
            {
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white700,
              maxWidth: 300,
              marginBottom: SIZES.xSmall - 5,
            },
          ]}>
          <Ionicons
            name="person-circle-outline"
            color={COLORS.black800}
            size={28}
          />
          <TextInput
            placeholder="Email/Số điện thoại"
            style={{width: '100%', marginLeft: 5}}
          />
        </View>

        <View
          style={[
            styles.subContainer('row', 'space-between', 'center', 0, 0),
            {
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white700,
              maxWidth: 300,
            },
          ]}>
          <Ionicons
            name="lock-closed-outline"
            color={COLORS.black800}
            size={28}
          />
          <TextInput
            placeholder="Mật khẩu"
            style={{width: '100%', marginLeft: 5}}
          />
        </View>

        <View
          style={[
            styles.subContainer(
              'row',
              'center',
              'center',
              SIZES.large,
              SIZES.medium,
            ),
            {
              maxWidth: 390,
            },
          ]}>
          <View style={styles.signIn}>
            <Pressable
              onPress={() => {}}
              android_ripple={{color: COLORS.white900}}
              style={styles.btnSignIn}>
              <Text
                style={styles.btnText(COLORS.white900, SIZES.medium, 'bold')}>
                Đăng nhập
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>

      <View
        style={[
          styles.subContainer('row', 'center', 'center', 0, 0),
          styles.footer,
        ]}>
        <Text style={{color: COLORS.black900}}>Bạn chưa có tài khoản?</Text>

        <Pressable onPress={moveToSignUpScreen}>
          <Text style={{color: COLORS.blue800, marginLeft: 3}}>Đăng ký</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: (direction, justifyContent, alignItems, mt, mx) => ({
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    marginTop: mt,
    marginHorizontal: mx,
  }),
  signInContainer: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
  },
  backIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 40,
    bottom: 0,
    left: 0,
  },
  btnText: (color, size, weight) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
  }),
  btnSignIn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    overflow: 'hidden',
    borderRadius: SIZES.large,
    backgroundColor: COLORS.pink900,
  },
});

export default SignInScreen;
