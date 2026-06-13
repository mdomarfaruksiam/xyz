import React from 'react'
import { useNavigate } from 'react-router'
import Footer_1 from './Footer_1'
import Nav_1 from './Nav_1'

export default function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className='min-h-dvh flex flex-col items-center justify-between text-center'>
            <Nav_1 />
            <div>
                <p>404 error: Page Not Found.</p>
                <p>Probably not complete yet</p>
                <button onClick={() => {
                    navigate('/')
                }} className='mt-4 bg-primary text-bg px-4 py-2 rounded-md'>
                    Go Home
                </button>
            </div>
            <Footer_1 />
        </div>
    )
}
