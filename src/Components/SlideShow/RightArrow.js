import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightArrow = (props) => {
    return (
        <div className='nextArrow' onClick={props.nextSlide}>
            <FontAwesomeIcon icon='arrow-right' />
        </div>
    );
}

export default RightArrow;