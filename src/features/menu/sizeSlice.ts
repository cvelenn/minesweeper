import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SizeState {
  size: string,
}

const initialState: SizeState = {
  size: '',
};

export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
  },

});

export const { setSize } = sizeSlice.actions;

export const selectCommand = (state: RootState) => state.size.size;

export default sizeSlice.reducer;
