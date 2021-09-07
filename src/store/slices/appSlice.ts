import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
export interface IApp {
  loading?: number;
}

const initialState: IApp = {
  loading: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      const currentLoading = state.loading;
      state.loading = action.payload ? currentLoading + 1 : currentLoading - 1;
    },
  },
});

export const { setLoading } = appSlice.actions;

export const selectLoading = (state: RootState): IApp => state.app;

export default appSlice.reducer;
