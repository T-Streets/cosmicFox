import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftArrow = (props) => {
    return (
        <div className='nextArrow' onClick={props.prevSlide}>
            <FontAwesomeIcon icon='arrow-left' />
        </div>
    );
}

export default LeftArrow;