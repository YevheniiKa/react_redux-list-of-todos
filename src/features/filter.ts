import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/Status';

const initialState: State = {
  query: '',
  status: 'all',
};

type State = {
  query: string;
  status: Status;
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.query = action.payload;
    },
    setFilter: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = action.payload;
    },
  },
});

export const { setQuery, setFilter } = filterSlice.actions;
