import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import {errorMsg} from ".."

export default function Login() {
    const schema = z.object({
        email: z
            .string({ message: errorMsg.email.required })
            .trim()
            .email({ message: errorMsg.email.validation }),
        password: z
            .string({ message: errorMsg.passowrd.required })
            .min(6, { message: errorMsg.passowrd.length })
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,{message:errorMsg.passowrd.validation}),
    });
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(schema),
    });
    const handleSubmitForm = (values) => console.log(values);

    return (
        <div className="flex justify-center p-2 content-center h-screen">
            <div className="bg-slate-300 rounded-md p-4 flex flex-col self-center -translate-y-14 min-w-96">
                <h1 className="text-center font-bold text-xl">Welcome</h1>
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="flex flex-col gap-2 mt-4"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email Id / Username</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="off"
                            {...register("email")}
                            placeholder="Email or Username"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
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
