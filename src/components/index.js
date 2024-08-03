import NavBar from "./navbar/NavBar";
import conf from "../config/conf";
import Logo from "./Logo";
import SideBar from "./sidebar/SideBar";
import Profile from "./profile/Profile";
import MediaPostCard from "./postCard/MediaPostCard";
import Body from "./body/Body";
import VideoContainer from "./postContainer/VideoContainer";
import ImageContainer from "./postContainer/ImageContainer";
import TweetContainer from "./postContainer/TweetContainer";
import TweetPostCard from "./postCard/TweetPostCard";
import Footer from "./footer/Footer";

import logoImage from "../assets/logo.png";
import userImage from "../assets/user.jpg";
import dummyImage from "../assets/DummyPost.jpg";

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

export {
    conf,
    NavBar,
    Logo,
    SideBar,
    Body,
    Profile,
    MediaPostCard,
    TweetPostCard,
    VideoContainer,
    ImageContainer,
    TweetContainer,
    Footer,
    logoImage,
    userImage,
    dummyImage,
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
    FaRegComment
};
