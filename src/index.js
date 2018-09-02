import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import App from './Components/App';
import { Library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Main = () => {
    return (
        <div>
            <App />
        </div>
    );
}

render(<Main />, document.getElementById('app'));