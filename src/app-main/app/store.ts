import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/planning/test/counterSlice';
import mainMenuReducer from '../../hs-components/MainMenuSidebar/MainMenuSlice';
import configMenuReducer from '../../hs-components/ConfigSidebar/ConfigSidebarSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        mainMenu: mainMenuReducer,
        optionsMenu: configMenuReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
