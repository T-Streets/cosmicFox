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
    
    handleScroll = () => {
        this.setState(prevState => {
            const incrementCounter = {
                counter: prevState.counter += 1
            }
            return {...incrementCounter}
        })
        if(this.state.counter > 50) {
            this.setState({
                navbarVisible: true
            })
        }
        console.log(this.state.navbarVisible, this.state.counter)
    }

    render(){
        return (
            <div>
            { this.state.navbarVisible ? <Nav /> : null}
                <Slider />
                <Slider />
                <Slider />
                <Slider />
            </div>
        )
    }
}

export default App