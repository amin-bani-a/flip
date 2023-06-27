import React, { useEffect, useState } from 'react';

function Card(props) {
    return (
        <div className='p-1 m-2 bg-gray-300 cursor-pointer hover:transform hover:scale-110 transition duration-200 ease-in-out'>
            <img src={ props.imageSrc } />
        </div>

    );
};


export default Card;