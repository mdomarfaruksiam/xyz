import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { RiMenu3Fill } from "react-icons/ri"
import { IoSearch } from "react-icons/io5";


import Search from './Search';


export default function Nav_1() {


    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const links = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <header className="w-full bg-surface border-b border-border">
            <nav className="container mx-auto flex flex-wrap justify-between items-center p-2">

                {/* column1 */}
                <h1 className="text-2xl font-black tracking-tight text-primary whitespace-nowrap">
                    XYZ B2B
                </h1>

                {/* column 2 */}
                <div className="flex items-center gap-2">

                    <div
                        onClick={() => setSearchOpen(!searchOpen)}
                        className={`overflow-hidden ${searchOpen ? 'max-h-0' : 'max-h-50'} md:hidden`}>
                        <IoSearch className='w-9 h-9 p-1 text-info border-2 rounded-md' />
                    </div>

                    {/* search engine for big devices*/}
                    <div className='hidden sm:flex w-full sm:w-auto mr-4'>
                        <Search />
                    </div>

                    {/* links */}
                    <div className="flex flex-row-reverse lg:flex-row items-center gap-4 lg:gap-8 relative">

                        {/* manu */}
                        <div onClick={() => setMenuOpen(!menuOpen)}>
                            <RiMenu3Fill className="lg:hidden w-9 h-9 text-primary hover:text-success cursor-pointer group border-2 rounded-md p-0.5" />
                        </div>

                        {/* links */}
                        <ul className={`flex lg:items-center flex-col lg:flex-row gap-4 absolute lg:static top-11 bg-bg lg:bg-transparent w-60 lg:w-auto lg:max-h-500 ${menuOpen ? 'pt-4 border max-h-150' : 'max-h-0'} lg:max-h-auto font-bold sm:font-semibold text-secondary lg:border-none border-border rounded-md lg:p-0 overflow-hidden transition-max-h duration-500 z-11 shadow-lg`}>
                            {links.map((link) => {
                                return (
                                    <li
                                        key={link.path}
                                    >
                                        <Link
                                            className="border-b-2 border-border lg:border-none hover:text-text py-1 px-4 lg:p-0 block text-left"
                                            to={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                            <div className="flex items-center flex-col lg:flex-row p-2 px-4 mt-6 border-t lg:border-none border-info lg:space-y-0 lg:pt-0 lg:mt-0 lg:flex gap-4">
                                <li className="w-full">
                                    <Link className="hover:text-accent/50 text-accent whitespace-nowrap bg-border lg:bg-transparent border lg:border-none border-success text-center rounded-sm lg:rounded-0  block w-full font-bold p-1" to="/signin">Sign In</Link>
                                </li>
                                <li className="w-full">
                                    <Link className="bg-accent hover:bg-primary text-border hover:text-text px-4 py-2 rounded-md whitespace-nowrap text-center border border-border block w-full lg:bg-none font-bold p-1" to="/signup">Get Started</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* search engine for mobile */}
                <div className={`overflow-hidden w-full ${searchOpen ? 'max-h-50 mt-3' : 'max-h-0'} transition-max-h duration-150`}>
                    <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
                </div>
            </nav>
        </header>
    )
}