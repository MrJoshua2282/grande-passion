import React from 'react';

import './FrontFace.css';

const FrontFace = (props) => {
    return (
        <div className={`mainBackground ${props.className}`}>
            <div className='frontFace'>
                {props.children}
            </div>
        </div>
    )
}

export default FrontFace;