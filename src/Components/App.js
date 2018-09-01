import React, { Component } from 'react';
import Nav from './Nav';
import Slider from './SlideShow/Slider';

class App extends Component {
    render(){
        return (
            <div>
                <Nav />
                <Slider />
            </div>
        )
    }
}

export default App