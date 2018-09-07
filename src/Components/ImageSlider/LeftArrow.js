import React from 'react';

const LeftArrow = (props) => {
    return (
        <div className='prevArrow' onClick={props.prevSlide}>
            clickLeft
        </div>
    );
}

export default LeftArrow;