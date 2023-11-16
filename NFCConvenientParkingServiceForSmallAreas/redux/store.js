import {configureStore} from '@reduxjs/toolkit';

import {vehiclesReducer} from './slices/vehiclesSlice';
import {uiReducer} from './slices/uiSlice';
import {nfcTagReducer} from './slices/nfcTagSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    ui: uiReducer,
    nfcTag: nfcTagReducer,
  },
});

export default store;
