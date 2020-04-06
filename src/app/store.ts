import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../modules/planning/test/counterSlice';
import mainMenuReducer from './../components/MainMenuSidebar/MainMenuSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        mainMenu: mainMenuReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
