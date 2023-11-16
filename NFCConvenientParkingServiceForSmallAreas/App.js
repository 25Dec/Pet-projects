import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import AppNavigation from './components/AppNavigation';
import {Colors} from './constants/colors';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.Gray.Gray300}
      />
      <GestureHandlerRootView className="flex-1">
        <BottomSheetModalProvider>
          <Provider store={store}>
            <AppNavigation />
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
