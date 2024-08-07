import React, { useEffect } from "react";
import { VideoContainer } from "..";
import { useDispatch, useSelector } from "react-redux";
import { userLoginStatus } from "../../store/authSlice";

export default function Home() {
    const dispatch = useDispatch();
    const loginstatus = useSelector(userLoginStatus);
    return (
        <>
            <VideoContainer />
        </>
    );
}
