import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    user: null,
    loading: false,
    theme: "light",
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
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        unsetToken: (state) => {
            state.accessToken = null;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { login, logout, toggleLoading, setToken, unsetToken,toggleTheme } =
    authSlice.actions;
export const userLoginStatus = (state) => state.auth.status;
export const loggedInUser = (state) => state.auth.user;
export const accessToken = (state) => state.auth.accessToken;
export const loading = (state) => state.auth.loading;
export const theme = (state) => state.auth.theme;
export default authSlice.reducer;
