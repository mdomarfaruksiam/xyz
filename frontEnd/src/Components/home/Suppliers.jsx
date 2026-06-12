import React from 'react'

import image_1 from '../../images/image_1.png'

export default function Suppliers() {
    return (
        <div className="pt-8">
            <h2 className="font-semibold text-xl text-primary underline line-clamp-1">Our Suppliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                <div className="flex items-center gap-4 bg-surface border-border border p-2 rounded-lg">
                    <img src={image_1} className="max-h-30 max-w-30" alt="" />
                    <div>
                        <h3 className="font-bold text-lg">Akij Group</h3>
                        <p className="font-semibold text-md text-secondary">Dhaka, Bangladesh</p>
                        <p className="font-medium text-sm text-secondary">Category: Foodes & medicine</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
