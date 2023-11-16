import {FlatList} from 'react-native';

import {SingleProduct} from './index';

const ProductList = ({data, isHorizontal, numColumns}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <SingleProduct item={item} />}
      keyExtractor={item => item.id}
      horizontal={isHorizontal}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
    />
  );
};

export default ProductList;
