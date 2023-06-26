import React from 'react'
import Card from './Card'

function Main() {
    return (
        <div className='bg-white text-center flex flex-col justify-center align-middle items-center border-solid border-t-[1px] border-gray-200'>
            <div className='uppercase mb-2 mt-2 pt-3'>Image Gallery
            </div>
            <div className='w-10/12 mb-3 mt-1 text-[#909090]'>Flip Turn is free HTML5 responsive<a className='text-black cursor-pointer'> website template </a> by templatemo. Credit goes to <a className='text-black cursor-pointer'>Unsplash</a> for images used in this template. Morbi hendrerit lacinia magna et tempus. Integer placerat sed nulla non tincidunt.
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Main