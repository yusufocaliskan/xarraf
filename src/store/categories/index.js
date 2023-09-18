import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

export const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState({
  categories: [
    {
      name: 'Sea',
      Id: 0,
    },
    {
      name: 'Culture',
      Id: 1,
    },
    {
      name: 'History',
      Id: 2,
    },
    {
      name: 'Test 1',
      Id: 3,
    },
    {
      name: 'Test 2',
      Id: 4,
    },
  ],
  selectedCaregory: 1,
});
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectedCaregory(state, action) {
      state.selectedCaregory = action.payload;
    },
  },
});

export const categoryStore = categoriesAdapter.getSelectors(
  state => state.categories,
);

export const {selectedCaregory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
