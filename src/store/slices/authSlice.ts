import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface IAuth {
  isAuthenticated?: boolean;
  currentUser?: object;
}

const initialState: IAuth = {
  isAuthenticated: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setAuthenticated, setCurrentUser } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState): object =>
  state.auth.currentUser;

export default authSlice.reducer;
