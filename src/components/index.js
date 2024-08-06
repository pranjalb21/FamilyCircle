import conf from "../config/conf";
import errorMsg from "../config/errorMessage";

import NavBar from "./navbar/NavBar";
import Logo from "./Logo";
import SideBar from "./sidebar/SideBar";
import Profile from "./profile/Profile";
import MediaPostCard from "./postCard/MediaPostCard";
import MyProfile from "./myProfile/MyProfile";
import VideoContainer from "./postContainer/VideoContainer";
import ImageContainer from "./postContainer/ImageContainer";
import TweetContainer from "./postContainer/TweetContainer";
import TweetPostCard from "./postCard/TweetPostCard";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Container from "./container/Container";
import Avatar from "./Avatar";
import LikedVideo from "./likedVideo/LikedVideo";
import Collection from "./collection/Collection";
import Subscriber from "./subscriber/Subscriber";
import History from "./history/History";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import BottomBar from "./sidebar/BottomBar";
import Video from "./video/Video";

import CollectionPage from "../pages/CollectionPage";
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import LikedVideoPage from "../pages/LikedVideoPage";
import ProfilePage from "../pages/ProfilePage";
import SubscriberPage from "../pages/SubscriberPage";
import SubscriberTag from "./subsciberTag/SubscriberTag";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import VideoPage from "../pages/VideoPage";

import logoImage from "../assets/logo.png";
import userImage from "../assets/user.jpg";
import dummyImage from "../assets/DummyPost.jpg";

import video from "../assets/video.mp4"

import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { FaHistory } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiSettings2Fill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import store from "../store/store";

export {
    conf,
    errorMsg,
    NavBar,
    Logo,
    SideBar,
    MyProfile,
    Profile,
    MediaPostCard,
    TweetPostCard,
    VideoContainer,
    ImageContainer,
    TweetContainer,
    Footer,
    Home,
    Container,
    Avatar,
    History,
    LikedVideo,
    Collection,
    Subscriber,
    CollectionPage,
    HistoryPage,
    HomePage,
    LikedVideoPage,
    ProfilePage,
    SubscriberPage,
    VideoPage,
    SubscriberTag,
    Login,
    LoginPage,
    Signup,
    SignupPage,
    BottomBar,
    Video,
    logoImage,
    userImage,
    dummyImage,
    video,
    FaSearch,
    IoHomeOutline,
    SlLike,
    FaHistory,
    IoVideocam,
    BsFolder2Open,
    FaUserCheck,
    TiDocumentText,
    CgProfile,
    RiSettings2Fill,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    AiFillLike,
    FaRegComment,
    store,
};
