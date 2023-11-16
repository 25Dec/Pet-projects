import {createSlice} from '@reduxjs/toolkit/';

const initialState = {
  id: '',
  license_plate: '',
  time_in: '',
  time_out: '',
  is_lost_card: false,
  report_lost_at: '',
};

const reducers = {
  addNewVehicle: state => {},
  removeCurrentVehicle: state => {},
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers,
});

export const {addNewVehicle, removeCurrentVehicle} = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
