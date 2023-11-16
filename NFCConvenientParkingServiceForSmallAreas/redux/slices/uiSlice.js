import {createSlice} from '@reduxjs/toolkit/';

const initialState = {
  isShowBottomSheet: false,
};

const reducers = {
  showBottomSheet: state => {
    state.isShowBottomSheet = true;
  },
  hideBottomSheet: state => {
    state.isShowBottomSheet = false;
  },
  toggleShowBottomSheet: state => {
    state.isShowBottomSheet = !state.isShowBottomSheet;
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers,
});

export const {showBottomSheet, hideBottomSheet, toggleShowBottomSheet} =
  uiSlice.actions;
export const uiReducer = uiSlice.reducer;
