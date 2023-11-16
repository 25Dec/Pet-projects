import {StyleSheet, View, SafeAreaView, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {data} from '../data/data';
import {FavoritesList} from '../components/index';
import {COLORS, SIZES} from '../constants/theme';

const FavoritesScreen = () => {
  let navigation = useNavigation();

  let moveToCartScreen = () => navigation.navigate('Cart');

  let moveToChatScreen = () => navigation.navigate('Chat');

  return (
    <SafeAreaView style={styles.productsContainer}>
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
          <Pressable onPress={() => {}}>
            <Ionicons name="search" size={28} color={COLORS.black900} />
          </Pressable>
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

      <FavoritesList data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    alignItems: 'center',
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
  countText: {
    color: COLORS.white900,
    backgroundColor: COLORS.pink900,
    paddingHorizontal: 5,
    borderRadius: 99,
    fontSize: SIZES.small - 2,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
