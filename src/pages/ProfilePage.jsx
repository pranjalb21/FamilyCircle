import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Profile from "../components/profile/Profile";
import UserProfile from "../components/profile/UserProfile";

export default function ProfilePage({ title, self = true }) {
    useEffect(() => {
        document.title = `FamilyCircle | ${title}`;
    }, []);
    if (self) {
        return (
            <Layout>
                <Profile />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <UserProfile />
            </Layout>
        );
    }
}
