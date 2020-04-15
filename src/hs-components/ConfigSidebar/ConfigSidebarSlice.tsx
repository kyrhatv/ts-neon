import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OptionsMenuState = {
    id: string;
    isShown: boolean;
    currentModule: null | 'planning' | 'timesheets' | 'organisation' | 'analyze' | 'request' | 'parameter';
    isPinned: boolean;
};

const INITIAL_STATE: OptionsMenuState = {
    id: 'mainMenu',
    isShown: false,
    currentModule: null,
    isPinned: false
};

export const slice = createSlice({
    name: 'optionsMenu',
    initialState: INITIAL_STATE,
    reducers: { toggleOptionsMenu: (state, action: PayloadAction<OptionsMenuState>) => action.payload }
});

export const getOptionMenu = (state) => state.optionsMenu;
export const getIsOptionShown = (state) => state.optionsMenu.isShown;
export const getCurrentModule = (state) => state.optionsMenu.currentModule;
export const getIsPinned = (state) => state.optionsMenu.isPinned;

export const { toggleOptionsMenu } = slice.actions;

export default slice.reducer;
