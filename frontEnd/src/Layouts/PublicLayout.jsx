import React from 'react'
import { Outlet } from 'react-router'
import Footer_1 from '../Components/Footer_1'
import Nav_1 from '../Components/Nav_1'

export default function PublicLayout() {
    return (
        <div className='min-h-dvh flex flex-col justify-between'>
            <Nav_1 />
            <Outlet />
            <Footer_1 />
        </div>
    )
}
