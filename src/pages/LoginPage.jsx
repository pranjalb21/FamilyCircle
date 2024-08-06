import React, { useEffect } from "react";
import { Container, Login } from "../components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginPage() {
    return (
        <Container>
            <Login />
        </Container>
    );
}
