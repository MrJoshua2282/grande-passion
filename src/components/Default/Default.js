import React from 'react';

import './Default.css';

const Default = (props) => {
    return (
        <div className='errorPage'>
            <h1>404</h1>
            <h1>ERROR</h1>
            <h2>Page not found</h2>
            <h2>The requested url <span className='danger'>{props.location.pathname}</span> was not found</h2>
        </div>
    )
}
export default Default;