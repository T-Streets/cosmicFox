import React, { Component } from 'react';
import Nav from './Nav';
import Slider from './ImageSlider/Slider';

class App extends Component {
    constructor() {
        super()

        this.state = {
            navbarVisible: false,
            counter: 0
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
        console.log('this just ran')
    }
    
    handleScroll = () => {
        const currentYPosition = window.pageYOffset || document.documentElement.scrollTop

        currentYPosition >= 40 ?
            this.setState({ navbarVisible: true })
            :
            this.setState({ navbarVisible: false })
    }

    render(){
        return (
            <div>
            { this.state.navbarVisible ? <Nav /> : null}
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
            </div>
        )
    }
}

export default App