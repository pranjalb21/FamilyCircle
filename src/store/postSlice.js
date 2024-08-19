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
        setImages: (state, action) => {
            state.images = action.payload;
        },
        unsetImages: (state) => {
            state.images = null;
        },
        setTweets: (state, action) => {
            state.tweets = action.payload;
        },
        unsetTweets: (state) => {
            state.tweets = null;
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
        toggleTweetLike: (state, action) => {
            const index = state.tweets.docs.findIndex(
                (tweet) => tweet._id === action.payload.id
            );
            state.tweets.docs[index] = {
                ...state.tweets.docs[index],
                isLiked: !state.tweets.docs[index].isLiked,
            };
            state.tweets.docs[index].likesCount =
                state.tweets.docs[index].likesCount + Number(action.payload.likeValue);
        },
        toggleImageLike: (state, action) => {
            const index = state.images.docs.findIndex(
                (image) => image._id === action.payload.id
            );
            state.images.docs[index] = {
                ...state.images.docs[index],
                isLiked: !state.images.docs[index].isLiked,
            };
            state.images.docs[index].likesCount =
                state.images.docs[index].likesCount + Number(action.payload.likeValue);
        },
        toggleVideoLike: (state, action) => {
            const index = state.videos.docs.findIndex(
                (video) => video._id === action.payload.id
            );
            state.videos.docs[index] = {
                ...state.videos.docs[index],
                isLiked: !state.videos.docs[index].isLiked,
            };
            state.videos.docs[index].likesCount =
                state.videos.docs[index].likesCount + Number(action.payload.likeValue);
        },
    },
});

export const {
    setVideos,
    unsetVideos,
    setImages,
    unsetImages,
    setTweets,
    unsetTweets,
    setImagePage,
    setTweetPage,
    setVideoPage,
    toggleImageLike,
    toggleTweetLike,
    toggleVideoLike,
} = postSlice.actions;
export const allVideos = (state) => state.post.videos;
export const allTweets = (state) => state.post.tweets;
export const allImages = (state) => state.post.images;
export const videoPage = (state) => state.post.videoPage;
export const imagePage = (state) => state.post.imagePage;
export const tweetPage = (state) => state.post.tweetPage;
export default postSlice.reducer;
