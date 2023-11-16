import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';

import {COLORS, SIZES} from '../constants/theme';
import {ProductList} from '../components/index';
import {data} from '../data/data';

const HomeScreen = () => {
  let navigation = useNavigation();

  let moveToCartScreen = () => navigation.navigate('Cart');

  let moveToSearchScreen = () => navigation.navigate('Search');

  let moveToProductsScreen = () => navigation.navigate('Products');

  let moveToChatScreen = () => navigation.navigate('Chat');

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View
        style={styles.subContainer(
          'row',
          'space-between',
          'center',
          SIZES.medium,
          SIZES.medium,
        )}>
        <View style={styles.search}>
          <Ionicons name="search" size={28} color={COLORS.black900} />
          <TextInput
            placeholderTextColor={COLORS.black900}
            placeholder="Bạn đang tìm gì thế?"
            style={styles.searchInput}
            onPressIn={moveToSearchScreen}
          />
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

      <View
        style={[
          styles.subContainer(
            'column',
            'center',
            'center',
            SIZES.xSmall,
            SIZES.medium,
          ),
          {
            borderRadius: SIZES.medium,
            overflow: 'hidden',
          },
        ]}>
        <Image
          source={require('../assets/images/banner.gif')}
          style={styles.image}
        />
      </View>

      <View
        style={[
          styles.subContainer(
            'row',
            'space-between',
            'center',
            SIZES.xSmall,
            SIZES.medium,
          ),
          {
            marginBottom: SIZES.xSmall,
          },
        ]}>
        <Text
          style={[
            styles.newProductText(SIZES.xLarge, 'bold', COLORS.black900),
            {color: COLORS.pink900},
          ]}>
          Sản phẩm
        </Text>
        <View style={styles.subContainer('row', 'center', 'center', 0, 0)}>
          <Pressable onPress={moveToProductsScreen}>
            <Text
              style={[
                styles.newProductText(SIZES.small, 'normal', COLORS.black900),
                ,
                {marginRight: 4},
              ]}>
              Xem thêm
            </Text>
          </Pressable>
          <Ionicons name="chevron-forward" size={20} color={COLORS.black900} />
        </View>
      </View>

      <View style={styles.products}>
        <ProductList data={data} isHorizontal={true} numColumns={1} />
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
  newProductText: (size, weight, color) => ({
    fontSize: size,
    fontWeight: weight,
    color: color,
  }),
  homeContainer: {flex: 1},
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white900,
    borderRadius: SIZES.large,
    paddingHorizontal: SIZES.xSmall,
    marginRight: SIZES.xSmall,
  },
  searchInput: {
    paddingHorizontal: SIZES.xSmall,
  },
  cart: {
    position: 'relative',
    marginRight: SIZES.medium,
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
  image: {
    width: '85%',
    height: 250,
  },
  products: {
    flex: 1,
  },
});

export default HomeScreen;
