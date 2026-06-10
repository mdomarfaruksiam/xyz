import React, { useContext } from 'react'
import { authContext } from '../../Contexts/authContext'

function Home() {
    const { isLoggedIn, setIsLoggedIn } = useContext(authContext)
    return isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>logged in</button>
    ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>logged out</button>
    )
}

export default Home