import {StyleSheet, View, Pressable, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

import {COLORS, SIZES} from '../constants/theme';
import {PurchasedList} from '../components/index';

const CartScreen = () => {
  let navigation = useNavigation();

  let moveToHomeScreen = () => navigation.goBack();

  let moveToChatScreen = () => navigation.navigate('Chat');

  let moveToCheckoutScreen = () => navigation.navigate('Checkout');

  let totalPrice = 0;

  return (
    <SafeAreaView style={styles.cartContainer}>
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
            Giỏ hàng (0)
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

      <PurchasedList />

      <View
        style={[
          styles.subContainer('row', 'space-between', 'center', 0, 0),
          styles.footer,
        ]}>
        <View
          style={[
            styles.subContainer('row', 'space-between', 'center', 0, 10),
            {height: '100%'},
          ]}>
          <CheckBox disabled={false} />
          <Text style={{color: COLORS.black900, marginLeft: 10}}>Tất cả</Text>
        </View>

        <View
          style={[
            styles.subContainer('column', 'center', 'center', 0, 0),
            {height: '100%'},
          ]}>
          <Text style={{color: COLORS.black900}}>Tổng thanh toán</Text>

          <Text
            style={{marginLeft: 5, color: COLORS.pink900, fontWeight: 'bold'}}>
            {totalPrice.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </Text>
        </View>

        <View style={styles.purchaseBtn}>
          <Pressable
            onPress={moveToCheckoutScreen}
            android_ripple={{color: COLORS.white900}}
            style={{
              height: '100%',
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <Text style={styles.purchaseBtnText}>Mua hàng (0)</Text>
          </Pressable>
        </View>
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
  cartContainer: {
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
  purchaseBtn: {
    height: '100%',
    backgroundColor: COLORS.pink900,
    overflow: 'hidden',
  },
  purchaseBtnText: {
    color: COLORS.white900,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 55,
    backgroundColor: COLORS.white900,
    bottom: 0,
    left: 0,
  },
});

export default CartScreen;
