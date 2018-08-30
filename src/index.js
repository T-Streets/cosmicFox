import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';

const App = () => {
    return (
        <div>
            <h2>Cosmic Fox Crytsals</h2>
        </div>
    );
}

render(<App />, document.getElementById('app'));