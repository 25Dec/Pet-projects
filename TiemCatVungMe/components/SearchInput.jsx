import {StyleSheet, View, Pressable, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';

const SearchInput = ({autoFocus, hasFilter}) => {
  let navigation = useNavigation();

  let moveToHomeScreen = () => navigation.goBack();

  return (
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

      <View style={styles.search(hasFilter)}>
        <TextInput
          placeholderTextColor={COLORS.black900}
          placeholder="Bạn đang tìm gì thế?"
          style={styles.searchInput}
          autoFocus={autoFocus}
        />

        <View style={styles.searchIcon}>
          <Pressable
            android_ripple={{color: COLORS.white800}}
            style={styles.searchIconPressable}>
            <Ionicons name="search" size={28} color={COLORS.white900} />
          </Pressable>
        </View>
      </View>

      {hasFilter && (
        <View style={styles.filterIcon}>
          <Pressable onPress={() => {}}>
            <Ionicons name="filter-outline" size={28} color={COLORS.black900} />
          </Pressable>
        </View>
      )}
    </View>
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
  backIcon: {
    marginRight: SIZES.xSmall,
  },
  filterIcon: {},
  search: hasFilter => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white900,
    paddingHorizontal: SIZES.xSmall,
    position: 'relative',
    borderRadius: SIZES.large,
    overflow: 'hidden',
    marginRight: hasFilter ? SIZES.xSmall : 0,
  }),
  searchInput: {
    paddingHorizontal: SIZES.xSmall,
    borderRadius: SIZES.large,
    overflow: 'hidden',
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconPressable: {
    padding: 11,
    backgroundColor: COLORS.pink900,
    borderTopRightRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
    overflow: 'hidden',
  },
});

export default SearchInput;
