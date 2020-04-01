import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../modules/planning/test/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
