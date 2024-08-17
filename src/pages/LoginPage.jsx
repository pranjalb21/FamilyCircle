import React, { useEffect } from "react";
import Login from "../components/login/Login";
import Container from "../components/container/Container";
import { useSelector } from "react-redux";
import { userLoginStatus } from "../store/authSlice";
import HomePage from "./HomePage";
import { Navigate } from "react-router-dom";

export default function LoginPage({title}) {
    const userStatus = useSelector(userLoginStatus);
    useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
    return userStatus ? (
        <Navigate to={"/"} />
    ) : (
        <Container>
            <Login />
        </Container>
    );
}
