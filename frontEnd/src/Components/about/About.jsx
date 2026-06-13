
import React, { useContext, useState } from 'react'
import { authContext } from '../../Contexts/authContext'

function About() {
    const { isLoggedIn, setIsLoggedIn } = useContext(authContext)

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);

        // Updates the HTML tag: <html data-theme="dark">
        document.documentElement.setAttribute('data-theme', nextTheme);
    }

    return <>
        {!isLoggedIn ?
            <button className="bg-primary text-brand-text py-2 px-4 rounded" onClick={() => setIsLoggedIn(!isLoggedIn)}>logged in</button>
            :
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>logged out</button>
        }
        <button
            onClick={toggleTheme}
            className="px-4 py-2 font-semibold text-sm bg-primary text-brand-bg rounded-lg shadow-sm"
        >
            Toggle Theme
        </button>
    </>
}

export default About
