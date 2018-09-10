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
    }

    render(){
        return (
            <div>
            { this.state.navbarVisible ? <Nav /> : null}
                <Slider />
            </div>
        )
    }
}

export default App