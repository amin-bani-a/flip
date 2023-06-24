import React from 'react'

function Header() {
    return (
        <div className='bg-red-600 text-center h-[6.75rem] flex flex-row justify-between items-center'>
            <div className='bg-yellow-500 w-15 text-5xl m-1 p-'>FLIP TURN</div>
            <div>
                <div className='bg-red-700 w-10 m-1 p-1 '>Nav</div>
            </div>
        </div>
    )
}

export default Header