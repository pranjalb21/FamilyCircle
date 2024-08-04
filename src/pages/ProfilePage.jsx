import React, { useEffect } from "react";
import { Container, MyProfile } from "../components";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("profile/videos");
    }, [navigate]);
    return (
        <Container>
            <MyProfile />
        </Container>
    );
}
