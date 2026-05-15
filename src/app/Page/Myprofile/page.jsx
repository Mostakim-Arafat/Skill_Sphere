'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = () => {
    const {data:session} = authClient.useSession()
    const user = session?.user
    const image = user?.image
    const name = user?.name
    return (
        <div className="flex flex-col justify-center items-center">
            {
                user ?   <div>
            <h1 className="font-bold text-2xl my-10">My Profile</h1>
            <div><Image src={image} alt={name} width={150} height={150}  className="rounded-full"/></div>
            <h1>Name: {user?.name}</h1>
           <p> Email: {user?.email}</p>
           </div>  : redirect('/Page/Login')
            }
           

        </div>
    );
};

export default page;