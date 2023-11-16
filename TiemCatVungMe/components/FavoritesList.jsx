import {FlatList} from 'react-native';

import {EmptyList, SingleFavoriteItem} from './index';

const FavoritesList = ({data}) => {
  return (
    <FlatList
      data={[]}
      renderItem={({item}) => <SingleFavoriteItem item={item} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      ListEmptyComponent={<EmptyList type="favorite" />}
    />
  );
};

export default FavoritesList;
