import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, SIZES} from '../constants/theme';
import {ScrollView} from 'react-native-gesture-handler';

const ProductDetailsScreen = () => {
  let navigation = useNavigation();
  let route = useRoute();
  let {item} = route.params;

  let moveToHomeScreen = () => navigation.goBack();

  let moveToCartScreen = () => navigation.navigate('Cart');

  let moveToCheckoutScreen = () => navigation.navigate('Checkout');

  let moveToChatScreen = () => navigation.navigate('Chat');

  return (
    <SafeAreaView style={styles.productDetailsContainer}>
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
        </View>

        <View style={styles.cart}>
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
      </View>

      <ScrollView style={{flex: 1}}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />

        <View style={styles.titleBox(0)}>
          <Text
            style={[
              styles.btnText(COLORS.black900, SIZES.large, 'normal'),
              {marginBottom: 5},
            ]}>
            {item.title}
          </Text>

          <Text style={styles.btnText(COLORS.pink900, SIZES.large, 'bold')}>
            {item.price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </Text>
        </View>

        <View
          style={[
            styles.titleBox(SIZES.xSmall),
            styles.subContainer('row', 'flex-start', 'center', 0, 0),
          ]}>
          <Text
            style={[
              styles.btnText(COLORS.gray900, SIZES.small, 'normal'),
              {marginRight: 5},
            ]}>
            Đã bán 0
          </Text>

          <Ionicons.Button
            name="heart-outline"
            size={20}
            color={COLORS.black900}
            backgroundColor={COLORS.white900}
            onPress={() => {
              console.log('Pressed');
            }}
          />
        </View>

        <View style={[styles.titleBox(0)]}>
          <Text
            style={[
              styles.btnText(COLORS.black900, SIZES.small + 2, 'bold'),
              {marginBottom: SIZES.small},
            ]}>
            Mô tả sản phẩm
          </Text>
          <Text
            style={[styles.btnText(COLORS.black900, SIZES.small, 'normal')]}>
            Chưa có thông tin mô tả sản phẩm!
          </Text>
        </View>
      </ScrollView>

      <View
        style={[
          styles.subContainer('row', 'space-between', 'center', 0, 0),
          styles.footer,
        ]}>
        <View
          style={[
            styles.subContainer('row', 'space-between', 'center', 0, 0),
            styles.btnContainer(
              '50%',
              '100%',
              'hidden',
              'center',
              COLORS.white900,
            ),
          ]}>
          <Pressable
            onPress={moveToChatScreen}
            android_ripple={{color: COLORS.white700}}
            style={styles.btn('50%')}>
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={28}
              color={COLORS.black900}
            />
          </Pressable>

          <Text>|</Text>

          <Pressable
            onPress={() => console.log('Add to cart')}
            android_ripple={{color: COLORS.white700}}
            style={styles.btn('50%')}>
            <MaterialCommunityIcons
              name="cart-plus"
              size={28}
              color={COLORS.black900}
            />
          </Pressable>
        </View>

        <View
          style={styles.btnContainer(
            '50%',
            '100%',
            'hidden',
            'center',
            COLORS.pink900,
          )}>
          <Pressable
            onPress={moveToCheckoutScreen}
            android_ripple={{color: COLORS.white900}}
            style={styles.btn('100%')}>
            <Text style={styles.btnText(COLORS.white900, SIZES.medium, 'bold')}>
              Mua ngay
            </Text>
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
  productDetailsContainer: {
    flex: 1,
    position: 'relative',
  },
  cart: {
    position: 'relative',
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
  btnText: (color, size, weight) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
  }),
  btnContainer: (width, height, overflow, align, bgColor) => ({
    width: width,
    height: height,
    overflow: overflow,
    alignItems: align,
    backgroundColor: bgColor,
  }),
  btn: width => ({
    width: width,
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  image: {
    width: '100%',
    height: 300,
    marginBottom: SIZES.xSmall,
    backgroundColor: COLORS.white900,
  },
  titleBox: mb => ({
    paddingVertical: SIZES.xSmall - 5,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white900,
    marginBottom: mb,
  }),
  footer: {
    position: 'absolute',
    width: '100%',
    height: 55,
    backgroundColor: COLORS.white900,
    bottom: 0,
    left: 0,
  },
});

export default ProductDetailsScreen;
