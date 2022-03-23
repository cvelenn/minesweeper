import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MapState {
  map: string[][],
  loading: boolean
}

const initialState: MapState = {
  map: [[]],
  loading: false
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string[][]>) => {
      state.map = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setMap, setLoading } = mapSlice.actions;

export const selectMap = (state: RootState) => state.map.map;
export const selectLoading = (state: RootState) => state.map.loading;

export default mapSlice.reducer;
