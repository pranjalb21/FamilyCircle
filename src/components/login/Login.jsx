import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { errorMsg } from "..";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, userLoginStatus } from "../../store/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector(userLoginStatus);
    const schema = z.object({
        userNameOrEmail: z
            .string({ message: errorMsg.email.required })
            .trim()
            .min({ message: errorMsg.username.length }),
        password: z
            .string({ message: errorMsg.passowrd.required })
            .min(6, { message: errorMsg.passowrd.length }),
    });
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        defaultValues: {
            userNameOrEmail: "",
            password: "",
        },
        resolver: zodResolver(schema),
    });
    const handleSubmitForm = async (values) => {
        const result = await axios
            .post("http://localhost:3000/api/v1/users/login", values)
            .then((res) => res.data)
            .catch((err) => err.response.data);
        console.log(result);
        if (result.success) {
            toast.success(result.message);
            dispatch(login(result.data.user));
            localStorage.setItem("user", JSON.stringify(result.data.user));
            localStorage.setItem("accessToken", result.data.accessToken);
            navigate("/");
            console.log(result);
        } else {
            toast.error(result.message);
        }
    };
    useEffect(() => {
        if (loginStatus) navigate("/");
    }, [loginStatus]);

    return (
        <div className="flex justify-center p-2 content-center h-screen">
            <div className="bg-slate-300 rounded-md p-4 flex flex-col self-center -translate-y-14 min-w-96">
                <h1 className="text-center font-bold text-xl">Welcome</h1>
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="flex flex-col gap-2 mt-4"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email Id/Username</label>
                        <input
                            type="text"
                            name="userNameOrEmail"
                            id="userNameOrEmail"
                            autoComplete="off"
                            {...register("userNameOrEmail")}
                            placeholder="Email or Username"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.userNameOrEmail && (
                            <p className="text-red-500">
                                {errors.userNameOrEmail.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: "Password is required.",
                            })}
                            placeholder="Password"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <button
                            type="submit"
                            className="bg-blue-400 py-2 rounded-md font-bold hover:bg-blue-500 duration-300 mt-2"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-2 text-center gap-2 flex flex-col">
                    <p>
                        Don't have an account ?{" "}
                        <Link
                            to={"/signup"}
                            className="hover:underline hover:text-blue-500"
                        >
                            click here
                        </Link>{" "}
                    </p>
                    <p>
                        <Link className="hover:underline hover:text-blue-500">
                            Forgot password
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
