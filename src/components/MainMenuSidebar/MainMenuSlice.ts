import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MenuState = {
    id: string;
    isShown: boolean;
};

const INITIAL_STATE: MenuState = {
    id: 'LEFT_MENU',
    isShown: false
};

export const slice = createSlice({
    name: 'mainMenu',
    initialState: INITIAL_STATE,
    reducers: { toggleMenu: (state, action: PayloadAction<MenuState>) => action.payload }
});

export const toggleMenuSelector = (state) => state.mainMenu;

export const { toggleMenu } = slice.actions;

export default slice.reducer;
