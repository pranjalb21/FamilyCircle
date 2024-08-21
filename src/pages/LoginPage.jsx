import React, { useEffect } from "react";
import Login from "../components/login/Login";
import Container from "../components/container/Container";
import { useSelector } from "react-redux";
import { loggedInUser, userLoginStatus } from "../store/authSlice";
import HomePage from "./HomePage";
import { Navigate } from "react-router-dom";

export default function LoginPage({ title }) {
    const user = useSelector(loggedInUser);
    useEffect(() => {

        document.title = `FamilyCircle | ${title}`;
    }, []);
    return (
        <>
            {user && <Navigate to="/" replace={true}></Navigate>}
            <Container>
                <Login />
            </Container>
        </>
    );
}
