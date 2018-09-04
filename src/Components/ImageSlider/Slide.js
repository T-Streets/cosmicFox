import React from 'react';

const Slide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    
    return (
        <div className='slide' style={styles}></div>
    )
}

export default Slide;