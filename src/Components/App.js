import React, { Component } from 'react';
import Nav from './Nav';
import Slider from './ImageSlider/Slider';

class App extends Component {
    constructor() {
        super()

        this.state = {
            navbarVisible: false,
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = () => {
        this.setState({navbarVisible: true})
        console.log(this.state.navbarVisible)
    }

    render(){
        return (
            <div>
                {/* { this.state.navbarVisible ? <Nav userScroll = {true} /> : null} */}
                <Nav userScroll={this.state.navbarVisible ? 'true' : 'false'} />
                <Slider />
            </div>
        )
    }
}

export default App