import React from 'react'

import { IoSearch } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



export default function Search({ searchOpen, setSearchOpen }) {
    return (
        <div className="relative w-full flex">
            <input
                type="text"
                placeholder="Search..."
                className="bg-surface border-2 border-r-0 border-border focus:border-border/50 focus:outline-none px-2 py-1 rounded-l-lg w-full"
            />

            <button
                onClick={() => setSearchOpen(!searchOpen)} className="bg-surface hover:bg-surface/20 text-accent hover:text-accent/60 px-2 py-2 border-2 border-r-0 border-border hover:border-border/50 ">
                <RxCross2 />
            </button>

            <button className="bg-border hover:bg-border/20 text-accent hover:text-accent/50 border-2 border-primary hover:border-accent ">
                <FaRegImages className='w-15' />
            </button>

            <button className="bg-primary hover:bg-accent text-border hover:text-border/50 px-4 py-2 rounded-r-lg border border-l-0 border-accent hover:border-primary ">
                <IoSearch className='w-5 h-5' />
            </button>
        </div>
    )
}
