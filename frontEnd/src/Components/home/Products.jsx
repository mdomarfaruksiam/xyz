import React from 'react'

import image_1 from '../../images/image_1.png'

export default function Products() {
    return (

        <div className='mt-10'>
            <h2 className="font-semibold text-xl md:text-4xl text-text line-clamp-1">Products From Suppliers</h2>
            <div className='border mt-2 border-border'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                {/* add product from here this is the card */}
                <div className="bg-surface border border-border rounded-lg p-2">
                    <div className='flex items-center gap-2'>
                        <img src={image_1} className='max-w-10 max-h-12' alt="" />
                        <div>
                            <h3 className="font-semibold text-lg text-text">Akij Wholesale</h3>
                            <h4 className="font-medium text-secondary">Electronics & electricle</h4>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-8">
                        <div className="flex flex-col justify-between gap-2">
                            <p className="line-clamp-4 overflow-hidden text-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque obcaecati unde facilis quidem vero! Nobis quisquam alias ad unde rerum.</p>
                            <button className="bg-success text-lg font-semibold text-surface border border-border rounded-lg">See more</button>
                        </div>
                        <img src={image_1} className="max-w-30 max-h-40" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
