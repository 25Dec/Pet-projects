import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

const EmptyList = ({type}) => {
  let image = '';
  let message = '';

  if (type == 'cart') {
    image = require('../assets/images/empty_cart.png');
    message = 'Giỏ Hàng Đang Trống';
  } else if (type == 'favorite') {
    image = require('../assets/images/empty_favorite_list.png');
    message = 'Bạn Chưa Có Sản Phẩm Yêu Thích';
  }

  return (
    <View style={styles.emptyCartContainer}>
      <Image source={image} style={styles.image} />

      <Text style={styles.text(COLORS.black900, SIZES.medium, 'bold', 5)}>
        {message}
      </Text>

      <Text style={[styles.text(COLORS.black900, SIZES.small, 'normal', 10)]}>
        Vui lòng thêm sản phẩm mà bạn ưa thích.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    marginTop: SIZES.xxLarge + 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: (color, size, weight, mt) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
    marginTop: mt,
  }),
});

export default EmptyList;
