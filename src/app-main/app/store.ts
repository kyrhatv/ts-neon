import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/planning/test/counterSlice';

import menusReducer from '../../hs-components/sf-sidebar/menusSlice';
import configMenuReducer from '../../hs-components/ConfigSidebar/ConfigSidebarSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        optionsMenu: configMenuReducer,
        menus: menusReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
