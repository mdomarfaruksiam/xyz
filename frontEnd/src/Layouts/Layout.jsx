import React, { useContext, useState } from 'react'
import PublicLayout from './PublicLayout'
import ProtectedLayout from './ProtectedLayout'
import { authContext } from '../Contexts/authContext'

function Layout() {
    const { isLoggedIn, setIsLoggedIn } = useContext(authContext)
    return isLoggedIn ? <ProtectedLayout /> : <PublicLayout />
}

export default Layout