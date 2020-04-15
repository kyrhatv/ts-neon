import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app-main/app/store';

export type Menu = {
    id: string;
    isShown: boolean;
    currentModule: null | 'planning' | 'timesheets' | 'organisation' | 'analyze' | 'request' | 'parameter';
    isPinned: boolean;
};

const menusAdapter = createEntityAdapter<Menu>({});
const emptyInitialState = menusAdapter.getInitialState();

const ENTITIES: Menu[] = [
    { id: 'mainMenu', isShown: false, currentModule: 'planning', isPinned: false },
    { id: 'optionMenu', isShown: false, currentModule: 'planning', isPinned: false }
];

const INITIAL_STATE = menusAdapter.upsertMany(emptyInitialState, ENTITIES);

const menusSlice = createSlice({
    name: 'menus',
    initialState: INITIAL_STATE,
    reducers: {
        updateMenu: menusAdapter.updateOne
    }
});

export const { updateMenu } = menusSlice.actions;

const menusSelectors = menusAdapter.getSelectors<RootState>((state) => state.menus);

export const { selectById } = menusSelectors;
export default menusSlice.reducer;
