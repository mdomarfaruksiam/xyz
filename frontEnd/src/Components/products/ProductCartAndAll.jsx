import React from 'react'

import { FaMinus } from "react-icons/fa";


import banner_1 from '../../images/image_1.png'
import { FaPlus } from 'react-icons/fa6';

export default function ProductCartAndAll() {
    return (
        <div className='space-y-3 shrink-0 sticky top-2 lg:top-19 self-start'>

            {/* Main Image Container */}
            <div className="w-full aspect-square md:w-80 md:h-80 p-2 border border-border rounded-lg overflow-hidden flex items-center justify-center bg-bg">
                <img
                    src={banner_1}
                    className='max-h-full max-w-full object-contain'
                    alt="Main Product view"
                />
            </div>

            {/* Thumbnail Slider Container */}
            <div className='w-full md:w-80 overflow-hidden'>
                <div className='flex gap-3 overflow-x-auto scrollbar-thin pb-2'>
                    <img src={banner_1} className='max-h-20 max-w-20 object-contain border border-border hover:border-muted/50 active:border-accent p-1 rounded-lg' alt='' />
                    <img src={banner_1} className='max-h-20 max-w-20 object-contain border border-border hover:border-muted/50 active:border-accent p-1 rounded-lg' alt='' />
                    <img src={banner_1} className='max-h-20 max-w-20 object-contain border border-border hover:border-muted/50 active:border-accent p-1 rounded-lg' alt='' />
                </div>
            </div>

            <div className='flex flex-col gap-2 justify-between text-lg font-semibold'>
                <div className='flex w-full p-2 bg-surface rounded-lg'>
                    <button className='w-full flex items-center justify-center '><FaMinus /></button>
                    <span className='w-full flex items-center justify-center before:border before:border-border before:h-full before:m-auto after:border after:border-border after:h-full after:m-auto'>1</span>
                    <button className='w-full flex items-center justify-center '><FaPlus /></button>
                </div>
                <button className='border border-border rounded p-1 bg-info text-bg'>Add to cart</button>
                <button className='border border-border rounded p-1 bg-accent text-bg'>Buy</button>
                <button className='border border-border rounded p-1 bg-bg text-accent'>Sell</button>
            </div>

        </div>
    )
}
