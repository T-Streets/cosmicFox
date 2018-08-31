import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import App from './Components/App';

const Main = () => {
    return (
        <div>
            <App />
        </div>
    );
}

render(<Main />, document.getElementById('app'));