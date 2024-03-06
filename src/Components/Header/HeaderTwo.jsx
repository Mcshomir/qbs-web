import React from 'react';
import logo from '../../assets/logo.png'

const HeaderTwo = () => {
    return (
        <div>
            <div className="navbar bg-base-100 md:w-full lg:w-full ms:w-[100%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li>
                                <a>Services</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Vision</a></li>
                            <li><a>Why Dhaka</a></li>
                            <li><a>Clients</a></li>
                            <li><a>Careers</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-28' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-black">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Vision</a></li>
                        <li><a>Why Dhaka</a></li>
                        <li><a>Clients</a></li>
                        <li><a>Careers</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white bg-red-500">Get a Quote</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderTwo;