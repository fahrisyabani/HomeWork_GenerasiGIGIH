import { createSlice } from '@reduxjs/toolkit';
import { User } from '../variety/spotify';

interface IInitialState {
    accessToken: string;
    isAuthorized: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: User | null;
}

const initialState: IInitialState = {
    accessToken: '',
    isAuthorized: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthorized = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },

        logout: (state) => {
            state.isAuthorized = false;
            state.user = null;
            state.accessToken = '';
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;