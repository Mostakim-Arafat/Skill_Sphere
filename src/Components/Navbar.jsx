'use client'

import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
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
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                            width={45}
                            height={45}/>
                    </div>
                </div>
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;