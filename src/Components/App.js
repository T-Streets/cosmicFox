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
        this.setState(prevState => {
            while(this.state.counter < 40) {
                const incrementCounter = {
                    counter: prevState.counter += 1
                }
                return {...incrementCounter}
            }
        })
        if(this.state.counter === 40) {
            this.setState({
                navbarVisible: true
            })
        }
        console.log(this.state.counter)
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