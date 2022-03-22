import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface FieldState {
  command: string,
}

const initialState: FieldState = {
  command: '',
};

export const filedSlice = createSlice({
  name: 'filed',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    executeCommand: (state, action: PayloadAction<string>) => {
      state.command = action.payload;
    },
  },

});

export const { executeCommand } = filedSlice.actions;

export const selectCommand = (state: RootState) => state.field.command;

export default filedSlice.reducer;
