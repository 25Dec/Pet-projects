import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigation from './navigation/AppNavigation';
import {COLORS} from './constants/theme';
import {store} from './redux/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white800} />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
