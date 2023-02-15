import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/logo.gif';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 py-2 gap-3 text-gray-500 hover:text-black transition-all duration-800 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 py-2 gap-3 bg-blue-700 text-white font-extrabold transition-all duration-800 ease-in-out capitalize shadow-lg rounded-md';


const Sidebar = ({ user, closeToggle }) => {

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className="flex flex-col justify-between bg-blue h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className="flex flex-col items-start ml-5">
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                    onClick={handleCloseSidebar}
                >
                <img src={logo} alt="logo" className="w-full"/>
                </Link>
                <div className="flex flex-col gap-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base 2xl:text-xl"> Discover Categories </h3>
                    {categories.slice(0, categories.length - 1).map((category) => {
                        return (
                            <NavLink
                                to={`/category/${category.name}`}
                                className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                                onClick={handleCloseSidebar}
                                key={category.name}
                            >
                                <img src={category.image} className="w-10 h-10 rounded-full" alt="category" />
                                {category.name}
                            </NavLink>
                        )

                    })}
                </div>
            </div>
            {user && (
                <Link
                    to={`user-profile/${user._id}`}
                    className="flex my-5 mb-3 gap-2 items-center bg-white rounded-lg shadow-md mx-3 border-solid border hover:shadow-lg hover:border-2 border-orange-100"
                    onClick={handleCloseSidebar}
                >
                    <img src={user.image} className="m-1 w-10 h-10 rounded-full" alt="user profile" />
                    <p className="text-black">{user.userName}</p>
                </Link>
            )}
        </div>
    )
}

export default Sidebar