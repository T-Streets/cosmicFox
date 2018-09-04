import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './ImageSlider/Carousel';

class App extends Component {
    render(){
        return (
            <div>
                <Nav />
                <Carousel />
            </div>
        )
    }
}

export default App