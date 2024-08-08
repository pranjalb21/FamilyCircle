import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import LoginPage from "./LoginPage";
import Home from "../components/home/Home";
import Container from "../components/container/Container";

export default function HomePage() {
    const [user, setUser] = useState(true);
    if (!user) {
        return (
            <Layout>
                <LoginPage />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <Container>
                    <Home />
                </Container>
            </Layout>
        );
    }
}
