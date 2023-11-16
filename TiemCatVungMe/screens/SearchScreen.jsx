import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {SearchInput} from '../components/index';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      <SearchInput autoFocus={true} />
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
  searchContainer: {flex: 1},
});

export default SearchScreen;
