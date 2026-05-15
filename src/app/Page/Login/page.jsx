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
        <div>
            <form onSubmit={onsubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4" >Login</button>
                    <h1>Donot have a account? <Link href={'/Page/Register'}>Register</Link></h1>
                    <button className="btn" onClick={handleGoogle}><FaGoogle></FaGoogle>Login with google</button>
                </fieldset>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;