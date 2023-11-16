import {FlatList} from 'react-native';

import {EmptyList, SinglePurchasedItem} from './index';

const PurchasedList = ({data}) => {
  return (
    <FlatList
      data={[]}
      renderItem={({item}) => <SinglePurchasedItem item={item} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      ListEmptyComponent={<EmptyList type="cart" />}
    />
  );
};

export default PurchasedList;
