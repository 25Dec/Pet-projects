import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../constants/theme';

const SingleProduct = ({item}) => {
  let navigation = useNavigation();

  let moveToProductDetailsScreen = item =>
    navigation.navigate('ProductDetails', {item: item});

  return (
    <Pressable
      style={styles.singleProductContainer}
      onPress={() => {
        moveToProductDetailsScreen(item);
      }}
      android_ripple={COLORS.white800}>
      <Image style={styles.image} source={item.image} resizeMode="cover" />

      <View style={styles.subContainer}>
        <Text
          style={styles.text(
            COLORS.black900,
            SIZES.large,
            'normal',
            SIZES.xSmall,
          )}>
          {item.title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.text(COLORS.pink900, SIZES.medium, 'bold', 0)}>
            {item.price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </Text>
          <Text style={{fontSize: SIZES.small - 2, color: COLORS.gray900}}>
            Đã bán 0
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  singleProductContainer: {
    width: 165,
    height: 280,
    padding: 10,
    paddingBottom: 15,
    marginTop: SIZES.xSmall,
    marginHorizontal: SIZES.xSmall - 5,
    backgroundColor: COLORS.white900,
    borderRadius: SIZES.medium,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: SIZES.medium,
  },
  text: (color, size, weight, mt) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
    marginTop: mt,
  }),
});

export default SingleProduct;
