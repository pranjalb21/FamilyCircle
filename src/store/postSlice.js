import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: null,
    tweets: null,
    images: null,
    imagePage: false,
    videoPage: true,
    tweetPage: false,
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
        setVideoPage: (state) => {
            state.imagePage = false;
            state.tweetPage = false;
            state.videoPage = true;
        },
        setTweetPage: (state) => {
            state.imagePage = false;
            state.tweetPage = true;
            state.videoPage = false;
        },
        setImagePage: (state) => {
            state.imagePage = true;
            state.tweetPage = false;
            state.videoPage = false;
        },
    },
});

export const {
    setVideos,
    unsetVideos,
    setImagePage,
    setTweetPage,
    setVideoPage,
} = postSlice.actions;
export const allVideos = (state) => state.post.videos;
export const videoPage = (state) => state.post.videoPage;
export const imagePage = (state) => state.post.imagePage;
export const tweetPage = (state) => state.post.tweetPage;
export default postSlice.reducer;
