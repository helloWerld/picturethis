import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/logo.gif';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center pl-0 px-5 py-1 my-1 gap-3 text-gray-500 hover:text-black transition-all duration-800 ease-in-out capitalize';
const isActiveStyle = 'flex items-center ml-5 px-5 py-2 my-0 gap-3 bg-black text-white font-extrabold transition-all duration-800 ease-in-out capitalize shadow-md rounded-md';


const Sidebar = ({ user, closeToggle }) => {

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className="flex flex-col justify-between h-full overflow-y-scroll hide-scrollbar shadow-lg bg-white">
            <div className="flex flex-col items-start w-220">
                <div className="sticky top-0 bg-white">
                    <Link
                        to="/"
                        className="flex my-4 px-5 pt-1 w-full items-center"
                        onClick={handleCloseSidebar}
                    >
                        <img src={logo} alt="logo" className="w-full"/>
                    </Link>
                </div>    
                <div className="flex flex-col gap-5 mt-4 ml-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className=" mt-2 pr-5 text-base 2xl:text-xl">Categories</h3>
                    {categories.map((category) => {
                        return (
                            <NavLink
                                to={`/category/${category.name}`}
                                className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                                onClick={handleCloseSidebar}
                                key={category.name}
                            >
                                <img src={category.image} className="w-8 h-8 rounded-full" alt="category" />
                                {category.name}
                            </NavLink>
                        )

                    })}
                </div>
            </div>
            {user && (
                <Link
                    to={`user-profile/${user._id}`}
                    className="sticky bottom-2 flex mb-3 gap-2 items-center px-3 bg-gray-100 rounded-lg text-black hover:text-white shadow-md mx-3 hover:shadow-lg hover:bg-black"
                    onClick={handleCloseSidebar}
                >
                    <img src={user.image} className="mx-1 my-2 w-8 h-8 rounded-full " alt="user profile" />
                    <p>{user.userName}</p>
                </Link>
            )}
        </div>
    )
}

export default Sidebar