import { useState } from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    console.log(props.display);

    let hStyle = {
        opacity: 1
    }

    if (props.display) {
        hStyle.opacity = 1
    } else {
        hStyle.opacity = 0
    }

    return (
        <div className="App-header">
            <h1 style={hStyle} className='plaque' >William Gruszka</h1>
            <Navigation/>
        </div>
    )
};

export default Header;