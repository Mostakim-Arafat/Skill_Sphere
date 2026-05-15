'use client'

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session , isPending} = authClient.useSession()
    const user = session?.user
    const name = session?.user?.name
    const image = session?.user?.image
    console.log(user)
    const menu = <>
        <li><Link href={'/Page/HomePage'}>Home</Link> </li>
        <li><Link href={'/Page/Course'}>Courses</Link> </li>
        <li><Link href={'/Page/Myprofile'}>My Profile</Link> </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu}

                    </ul>
                </div>
                <a className="text-xl font-bold">SkillSphere</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button">
                    <div className="w-10 rounded-full">
                        {
                            user ? 
                             <Image
                            alt={name}  
                            src={image}
                            width={45}
                            height={45} />
                            :
                            ''
                        }
                       
                    </div>
                </div>
                { isPending ?
                      <span className="loading loading-bars loading-lg"></span>
                      :
                    user ?
                        <Link href={'/Page/Login'} onClick={async () => await authClient.signOut()} className="btn">Logout</Link>
                        :
                        <Link href={'/Page/Login'} className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;