import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    user: null,
    subscribers: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const userLoginStatus = (state) => state.auth.status;
export const loggedInUser = (state) => state.auth.user;
export default authSlice.reducer;
