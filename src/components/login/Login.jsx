import React, { useState } from "react";
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Avatar,
    CssBaseline,
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    CircularProgress,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import errorMsg from "../../config/errorMessage";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { toast } from "react-toastify";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginSchema = z.object({
        userNameOrEmail: z
            .string({ message: errorMsg.userNameOrEmail.required })
            .trim()
            .toLowerCase()
            .min(3, { message: errorMsg.userNameOrEmail.length }),
        password: z
            .string({ message: errorMsg.password.required })
            .min(6, { message: errorMsg.password.length }),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            userNameOrEmail: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });


    const onSubmit = async (values) => {
        const result = await axios.post("users/login",values,{withCredentials:true})
        .then(res=>res.data)
        .then(data=>data)
        .catch(error=>error.response.data)
        if(result.success){
            axios.defaults.headers.common['Authorization']=`Bearer ${result.token}`
            toast.success(result.message)
            dispatch(login(result.data))
            localStorage.setItem("accessToken", result.data.accessToken)
            reset()
            navigate("/")
        }else{
            toast.error(result.message)
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full p-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col border py-4 px-10 sm:w-120 w-108  rounded-md items-center gap-2"
            >
                <div className="flex flex-col items-center w-full">
                    <Typography component="h1" variant="h4">
                        Family Circle
                    </Typography>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                </div>
                <div className="w-full flex-col">
                    <TextField
                        margin="normal"
                        fullWidth
                        id="userNameOrEmail"
                        label="Username or Email"
                        name="userNameOrEmail"
                        autoFocus
                        {...register("userNameOrEmail")}
                    />
                    <p className="text-orange-500 bg-gray-500">
                        {errors.userNameOrEmail &&
                            errors.userNameOrEmail.message}
                    </p>
                </div>
                {/* {errors.userNameOrEmail && (
                        <p className="text-orange-500">
                            {errors.userNameOrEmail.message}
                        </p>
                    )} */}
                <FormControl className="w-full" variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        {...register("password")}
                        error={errors.passowrd}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {errors.password && (
                        <p className="text-orange-500">
                            {errors.password.message}
                        </p>
                    )}
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                        ) : (
                            "Log In"
                        )}
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
            </form>
        </div>
    );
}

export default Login;
