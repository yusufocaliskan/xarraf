import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
export const countryAdapter = createEntityAdapter();
import {countriesNew} from '../countries';
const initialState = countryAdapter.getInitialState({
  countries: countriesNew,
  selectedCountry: {},
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const {selectedCountry} = countrySlice.actions;
export default countrySlice.reducer;
