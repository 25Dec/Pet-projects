import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, SIZES} from '../constants/theme';

const ProfileScreen = () => {
  let navigation = useNavigation();

  let moveToCartScreen = () => navigation.navigate('Cart');

  let moveToChatScreen = () => navigation.navigate('Chat');

  let moveToPurchaseHistoryScreen = () =>
    navigation.navigate('PurchaseHistory');

  let moveToSettingScreen = () => navigation.navigate('Setting');

  return (
    <SafeAreaView style={styles.profileContainer}>
      <View
        style={[
          styles.subContainer(
            'row',
            'flex-end',
            'center',
            SIZES.medium,
            SIZES.medium,
          ),
          {paddingBottom: 10},
        ]}>
        <View style={styles.icon(SIZES.medium)}>
          <Pressable onPress={moveToSettingScreen}>
            <Feather name="settings" size={26} color={COLORS.black900} />
          </Pressable>
          <View style={styles.textCount}>
            <Text style={styles.countText}>0</Text>
          </View>
        </View>

        <View style={styles.icon(SIZES.medium)}>
          <Pressable onPress={moveToCartScreen}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={28}
              color={COLORS.black900}
            />
          </Pressable>
          <View style={styles.textCount}>
            <Text style={styles.countText}>0</Text>
          </View>
        </View>

        <View style={styles.icon(0)}>
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

      <ScrollView>
        <View
          style={[
            styles.subContainer(
              'column',
              'center',
              'center',
              SIZES.medium,
              SIZES.medium,
            ),
            {
              marginBottom: SIZES.xxLarge,
            },
          ]}>
          <Ionicons
            name="person-circle-outline"
            size={150}
            color={COLORS.black800}
          />

          <Text style={styles.btnText(COLORS.black900, SIZES.xLarge, '500')}>
            Thien Nhan
          </Text>

          <Text
            style={[
              styles.btnText(COLORS.gray900, SIZES.medium, 'normal'),
              {marginTop: SIZES.xSmall},
            ]}>
            thiennhannguyenhuynh@gmail.com
          </Text>
        </View>

        <View style={[styles.titleBox(0, 0)]}>
          <Pressable
            android_ripple={{color: COLORS.white700}}
            onPress={moveToPurchaseHistoryScreen}
            style={[
              styles.subContainer('row', 'space-between', 'center', 0, 0),
              {paddingHorizontal: SIZES.medium, paddingVertical: SIZES.small},
            ]}>
            <View
              style={[
                styles.subContainer('row', 'space-between', 'center', 0, 0),
              ]}>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={24}
                color={COLORS.blue900}
              />
              <Text
                style={[
                  styles.btnText(COLORS.black900, SIZES.small + 2, 'normal'),
                  {marginLeft: SIZES.xSmall},
                ]}>
                Đơn mua
              </Text>
            </View>

            <View style={styles.subContainer('row', 'center', 'center', 0, 0)}>
              <Text
                style={[
                  styles.btnText(COLORS.gray900, SIZES.small - 1, 'normal'),
                  {marginRight: 4},
                ]}>
                Xem lịch sử mua hàng
              </Text>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.gray900}
              />
            </View>
          </Pressable>
        </View>

        <View
          style={[
            styles.subContainer('row', 'space-around', 'center', 0, 0),
            styles.titleBox(SIZES.small, SIZES.xSmall),
          ]}>
          <View style={styles.icon(0)}>
            <Pressable
              onPress={moveToPurchaseHistoryScreen}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={28}
                color={COLORS.black900}
              />
              <Text
                style={styles.btnText(
                  COLORS.black800,
                  SIZES.xSmall + 2,
                  'normal',
                )}>
                Chờ xác nhận
              </Text>
            </Pressable>
            <View style={styles.statusTextCount}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>

          <View style={styles.icon(0)}>
            <Pressable
              onPress={moveToPurchaseHistoryScreen}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="package-variant"
                size={28}
                color={COLORS.black900}
              />
              <Text
                style={styles.btnText(
                  COLORS.black800,
                  SIZES.xSmall + 2,
                  'normal',
                )}>
                Chờ lấy hàng
              </Text>
            </Pressable>
            <View style={styles.statusTextCount}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>

          <View style={styles.icon(0)}>
            <Pressable
              onPress={moveToPurchaseHistoryScreen}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={28}
                color={COLORS.black900}
              />
              <Text
                style={styles.btnText(
                  COLORS.black800,
                  SIZES.xSmall + 2,
                  'normal',
                )}>
                Đang giao
              </Text>
            </Pressable>
            <View style={styles.statusTextCount}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
        </View>

        <View style={[styles.titleBox(0, 0)]}>
          <Pressable
            android_ripple={{color: COLORS.white700}}
            style={[
              styles.subContainer('row', 'space-between', 'center', 0, 0),
              {paddingHorizontal: SIZES.medium, paddingVertical: SIZES.small},
            ]}>
            <View
              style={[
                styles.subContainer('row', 'space-between', 'center', 0, 0),
              ]}>
              <MaterialCommunityIcons
                name="medal-outline"
                size={24}
                color={COLORS.orange900}
              />
              <Text
                style={[
                  styles.btnText(COLORS.black900, SIZES.small + 2, 'normal'),
                  {marginLeft: SIZES.xSmall},
                ]}>
                Khách hàng thân thiết
              </Text>
            </View>
            <View style={styles.subContainer('row', 'center', 'center', 0, 0)}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.gray900}
              />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    position: 'relative',
  },
  subContainer: (direction, justifyContent, alignItems, mt, mx) => ({
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    marginTop: mt,
    marginHorizontal: mx,
  }),
  icon: mr => ({
    position: 'relative',
    marginRight: mr,
  }),
  textCount: {
    position: 'absolute',
    right: -5,
    bottom: 17,
  },
  statusTextCount: {
    position: 'absolute',
    right: 15,
    bottom: 35,
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
    paddingHorizontal: 0,
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
});

export default ProfileScreen;
