import React from "react";
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Avatar,
    CssBaseline,
    Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div
            className="flex flex-col justify-center items-center w-full p-4"
        >
            <Typography component="h1" variant="h4">
                Family Circle
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Typography className="text-center">Sign In with</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Link href="https://www.facebook.com" target="_blank">
                            <FacebookIcon
                                fontSize="large"
                                className="hover:shadow-md hover:shadow-blue-300"
                            />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.twitter.com" target="_blank">
                            <TwitterIcon
                                fontSize="large"
                                className="hover:shadow-md hover:shadow-blue-300"
                            />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.instagram.com" target="_blank">
                            <InstagramIcon
                                fontSize="large"
                                className="hover:shadow-md hover:shadow-blue-300"
                            />
                        </Link>
                    </Grid>
                </Grid>
                <Typography className="text-center">
                    Doesn't have an account?{" "}
                    <Link to={"/signup"}>
                    <span className="cursor-pointer hover:underline">
                        Click here
                    </span>
                    </Link>
                </Typography>
                <Typography className="text-center cursor-pointer hover:underline">
                    Forgot Password
                </Typography>
            </Box>
        </div>
    );
}

export default Login;
