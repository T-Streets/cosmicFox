import React from 'react';

const Nav = (userScroll) => {
    const noScrollStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    const onScrollStyle = {
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <nav>
            <ul className='container' style={userScroll ? onScrollStyle : noScrollStyle }>
                <li className='title'>Cosmic Fox</li>
                <li>Home</li>
                <li>Crystals</li>
                <li>Readings</li>
            </ul>
        </nav>
    )
}

export default Nav;