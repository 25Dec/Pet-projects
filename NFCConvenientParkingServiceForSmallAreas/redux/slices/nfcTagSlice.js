import {createSlice} from '@reduxjs/toolkit/';

const initialState = {
  nfcData: {},
};

const reducers = {
  changeNFCData: (state, action) => {
    state.data = action.payload;
  },
};

const nfcTagSlice = createSlice({
  name: 'nfcTag',
  initialState,
  reducers,
});

export const {changeNFCData} = nfcTagSlice.actions;
export const nfcTagReducer = nfcTagSlice.reducer;
