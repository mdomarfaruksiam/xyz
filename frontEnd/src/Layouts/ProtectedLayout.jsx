import React from 'react'
import { Outlet } from 'react-router'
import Nav_2 from '../Components/Nav_2'
import Footer_2 from '../Components/Footer_2'

export default function ProtectedLayout() {
    return (
        <div className='min-h-dvh flex flex-col justify-between'>
            <Nav_2 />
            <Outlet />
            <Footer_2 />
        </div>
    )
}
