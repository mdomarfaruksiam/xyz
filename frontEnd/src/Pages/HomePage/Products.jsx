import React from 'react'
import Banner from '../../Components/home/Banner'
import AllProducts from '../../Components/products/AllProducts'

export default function Products() {
    return (
        <main className='container mx-auto p-2'>
            <Banner />
            {/* products component */}
            <AllProducts />
        </main>
    )
}
