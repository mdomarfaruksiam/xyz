import React from 'react'

function Footer_1() {
    return (
        <footer className="bg-surface">
            <div className="container mx-auto py-8 text-center text-text">
                <div>

                </div>
            </div>
            <div className="border-t border-border"></div>
            <div className='flex justify-between items-center  container mx-auto'>
                <p className="text-center text-text text-sm py-2">© 2024 Your Company. All rights reserved.</p>
                <div className='text-xs'>
                    <a href="/privacy" className="text-text mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-text mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer_1