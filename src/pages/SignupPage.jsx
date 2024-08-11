import React from 'react'
import { useSelector } from 'react-redux';
import { userLoginStatus } from '../store/authSlice';
import { Navigate } from 'react-router-dom';
import Container from '../components/container/Container';
import Signup from '../components/signup/Signup';

export default function SignupPage() {
  const userStatus = useSelector(userLoginStatus);
    return userStatus ? (
        <Navigate to={"/"} />
    ) : (
        <Container>
            <Signup />
        </Container>
    );
}
