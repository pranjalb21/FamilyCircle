import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import LoginPage from "./LoginPage";
import Home from "../components/home/Home";
import Container from "../components/container/Container";
import { useSelector } from "react-redux";
import { userLoginStatus } from "../store/authSlice";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const userStatus = useSelector(userLoginStatus);
    if (userStatus) {
        return (
            <Layout>
                <Home />
            </Layout>
        );
    } else {
        return <Navigate to={"/login"} />;
    }
}