import {useState} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import {COLORS, SIZES} from '../constants/theme';

const SettingScreen = () => {
  let [isShowModal, setIsShowModal] = useState(false);
  let navigation = useNavigation();

  let moveBack = () => navigation.goBack();

  let moveToChatScreen = () => navigation.navigate('Chat');

  let showModal = () => {
    setIsShowModal(true);
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(COLORS.black900);
  };

  let hideModal = () => {
    setIsShowModal(false);
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(COLORS.white800);
  };

  let signOut = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.settingContainer}>
      <ScrollView style={{flex: 1}}>
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
            <Pressable onPress={moveBack}>
              <Ionicons name="arrow-back" size={28} color={COLORS.pink900} />
            </Pressable>
            <Text
              style={{
                fontSize: SIZES.large,
                marginLeft: SIZES.small,
                color: COLORS.black900,
              }}>
              Thiết lập tài khoản
            </Text>
          </View>

          <View style={styles.chat}>
            <Pressable onPress={moveToChatScreen}>
              <MaterialCommunityIcons
                name="chat-processing-outline"
                size={28}
                color={COLORS.black900}
              />
            </Pressable>
            <View style={styles.textCount}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
        </View>

        <View style={[styles.titleBox(SIZES.small, 0)]}>
          <View
            style={[
              styles.subContainer('row', 'space-between', 'center', 0, 0),
            ]}>
            <Text
              style={[
                styles.btnText(COLORS.black900, SIZES.small + 2, 'bold'),
              ]}>
              Hỗ trợ
            </Text>
          </View>
        </View>

        <Pressable
          android_ripple={{color: COLORS.white700}}
          onPress={() => {}}
          style={[
            styles.titleBox(SIZES.xSmall, 0),
            styles.subContainer('row', 'space-between', 'center', 0, 0),
          ]}>
          <Text
            style={[styles.btnText(COLORS.gray900, SIZES.small - 1, 'normal')]}>
            Hãy đánh giá chúng tôi ngay!
          </Text>
          <Ionicons name="chevron-forward" size={20} color={COLORS.gray900} />
        </Pressable>

        <Pressable
          android_ripple={{color: COLORS.white700}}
          onPress={() => {}}
          style={[
            styles.titleBox(SIZES.xSmall, 0),
            styles.subContainer('row', 'space-between', 'center', 0, 0),
          ]}>
          <Text
            style={[styles.btnText(COLORS.gray900, SIZES.small - 1, 'normal')]}>
            Giới thiệu
          </Text>
          <Ionicons name="chevron-forward" size={20} color={COLORS.gray900} />
        </Pressable>

        <View
          style={[
            styles.subContainer('row', 'center', 'center', SIZES.large, 0),
            {
              width: '100%',
            },
          ]}>
          <View style={styles.signOut}>
            <Pressable
              onPress={showModal}
              android_ripple={{color: COLORS.white900}}
              style={styles.btnSignOut}>
              <Text
                style={styles.btnText(COLORS.white900, SIZES.medium, 'bold')}>
                Đăng xuất
              </Text>
            </Pressable>
          </View>
        </View>

        <Modal isVisible={isShowModal} onBackdropPress={hideModal}>
          <View style={styles.innerModal}>
            <View style={{padding: SIZES.medium}}>
              <Text style={styles.innerModalText}>
                Bạn có chắc chắn muốn đăng xuất?
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={styles.innerModalButton(false)}
                android_ripple={{color: COLORS.white700}}
                onPress={hideModal}>
                <Text style={{color: COLORS.black900, fontSize: SIZES.medium}}>
                  Không
                </Text>
              </Pressable>

              <Pressable
                style={styles.innerModalButton(true)}
                android_ripple={{color: COLORS.white700}}
                onPress={signOut}>
                <Text style={{color: COLORS.pink900, fontSize: SIZES.medium}}>
                  Có
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
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
  settingContainer: {
    flex: 1,
    position: 'relative',
  },
  backIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCount: {
    position: 'absolute',
    right: -5,
    bottom: 17,
  },
  countText: {
    color: COLORS.white900,
    backgroundColor: COLORS.pink900,
    paddingHorizontal: 5,
    borderRadius: 99,
    fontSize: SIZES.small - 2,
    fontWeight: 'bold',
  },
  titleBox: (py, mb) => ({
    paddingVertical: py,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white900,
    marginBottom: mb,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white800,
  }),
  btnText: (color, size, weight) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
  }),
  btnSignOut: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOut: {
    width: '85%',
    height: 50,
    overflow: 'hidden',
    borderRadius: SIZES.large,
    backgroundColor: COLORS.pink900,
  },
  innerModal: {
    maxWidth: 390,
    backgroundColor: COLORS.white900,
  },
  innerModalText: {
    color: COLORS.gray900,
  },
  innerModalButton: isAcceptBtn => ({
    padding: SIZES.medium,
    width: '50%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderLeftWidth: isAcceptBtn ? 1 : 0,
    borderTopColor: COLORS.white700,
    borderLeftColor: isAcceptBtn ? COLORS.white700 : '',
  }),
});

export default SettingScreen;
