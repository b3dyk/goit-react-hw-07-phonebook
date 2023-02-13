import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from './filter.init-state';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,

  reducers: {
    filterContactsAction: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { filterContactsAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
