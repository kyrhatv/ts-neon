import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/planning/test/counterSlice';

import menusReducer from '../../hs-components/sf-sidebar/menusSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        menus: menusReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
