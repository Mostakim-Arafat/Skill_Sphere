'use client'
import { authClient } from '@/lib/auth-client';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register =  () => {
    const router = useRouter()
    const handleRegister = async(e) => {
         e.preventDefault();
         console.log(e.currentTarget)
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        const { data:res, error } = await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            image: data.photo,
        });
         if (error) {
                    toast.error(error.message)
                } else {
        
                    toast.success('Register successfully')
                    router.push('/Page/Login')
                }
        console.log(res,error)
    }
    return (
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Register</legend>

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="put your name" required />

                <label className="label">Photo</label>
                <input name='photo' type="url" className="input" placeholder="Photo url" required />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" required />

                <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <ToastContainer/>
        </form>
    );
};

export default Register;