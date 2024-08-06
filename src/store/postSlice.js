import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: null,
    tweets: null,
    images: null,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        unsetVideos: (state) => {
            state.videos = null;
        },
    },
});

export const { setVideos, unsetVideos } = postSlice.actions;
export default postSlice;
