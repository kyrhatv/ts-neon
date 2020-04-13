import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MenuState = {
    id: string;
    isShown: boolean;
    currentModule: null | 'planning' | 'timesheets' | 'organisation' | 'analyze' | 'request' | 'parameter';
    isPinned: boolean;
};

const INITIAL_STATE: MenuState = {
    id: 'LEFT_MENU',
    isShown: false,
    currentModule: null,
    isPinned: false
};

export const slice = createSlice({
    name: 'mainMenu',
    initialState: INITIAL_STATE,
    reducers: { toggleMenu: (state, action: PayloadAction<MenuState>) => action.payload }
});

export const getMenu = (state) => state.mainMenu;
export const getIsShown = (state) => state.mainMenu.isShown;
export const getCurrentModule = (state) => state.mainMenu.currentModule;
export const getIsPinned = (state) => state.mainMenu.isPinned;

export const { toggleMenu } = slice.actions;

export default slice.reducer;
