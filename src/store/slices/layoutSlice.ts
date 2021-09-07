import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface ILayout {
  header?: boolean;
  footer?: boolean;
}

export type LayoutAction = {
  type: string;
  payload: ILayout;
};

const initialState: ILayout = {
  header: true,
  footer: true,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDisplayLayout: (state, action: PayloadAction<ILayout>) => {
      state.footer = !!action.payload.footer;
      state.header = !!action.payload.header;
    },
  },
});

export const { setDisplayLayout } = layoutSlice.actions;

export const selectDisplayLayout = (state: RootState): ILayout => state.layout;

export default layoutSlice.reducer;
