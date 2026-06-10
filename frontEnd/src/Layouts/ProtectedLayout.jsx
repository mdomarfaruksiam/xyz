import React from 'react'
import { Outlet } from 'react-router'

export default function PublicLayout() {
    return (
        <div className='min-h-dvh flex flex-col justify-between'>
            protected Layout
            <div>
                <Outlet />
            </div>
            footer
        </div>
    )
}
