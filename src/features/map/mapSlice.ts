import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MapState {
  map: string[][],
  loading: boolean,
  restarted: boolean,
}

const initialState: MapState = {
  map: [[]],
  loading: false,
  restarted: false,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string[][]>) => {
      state.map = action.payload;
      state.restarted = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setRestarted: (state) => {
      state.restarted = true;
    },
  },
});

export const { setMap, setLoading, setRestarted } = mapSlice.actions;

export const selectMap = (state: RootState) => state.map.map;
export const selectLoading = (state: RootState) => state.map.loading;
export const selectRestarted = (state: RootState) => state.map.restarted;

export default mapSlice.reducer;
