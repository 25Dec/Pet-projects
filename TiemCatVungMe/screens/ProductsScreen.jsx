import {StyleSheet, View, SafeAreaView} from 'react-native';

import {data} from '../data/data';
import {ProductList, SearchInput} from '../components/index';
import {COLORS, SIZES} from '../constants/theme';

const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.productsContainer}>
      <SearchInput hasFilter={true} />
      <ProductList data={data} isHorizontal={false} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
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
});

export default ProductsScreen;
