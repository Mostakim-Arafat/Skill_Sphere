'use client'
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    

    const onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message)
        } else {

            toast.success('Login successfully')
        }
        console.log(res, error)
    }
    const handleGoogle = async () => {
        const { data: res, error } = await authClient.signIn.social({
            provider: "google",
        });
        console.log(res, error)
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold my-2">Login</h1>
            <form onSubmit={onsubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4" >Login</button>
                    <h1>Donot have a account? <Link href={'/Page/Register'} className="text-red-500">Register</Link></h1>
                    <button className="btn btn-info text-white" onClick={handleGoogle}><FaGoogle></FaGoogle>Login with google</button>
                </fieldset>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;