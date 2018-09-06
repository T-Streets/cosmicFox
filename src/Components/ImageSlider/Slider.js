import React, { Component } from 'react';
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from './Slide';
import Crys1 from '../../images/crys1.jpg';
import Crys2 from '../../images/crys2.jpg';
import Crys3 from '../../images/crys3.jpg';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Crys1, Crys2, Crys3],
            currentIndex: 0,
            translateValue: 0
        }
    }

    prevSlide = () => {

    }

    nextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())

        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className='slider'>
                <div className='slider-wrapper'
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => {
                            return (
                                <Slide image={image} key={i} />
                            )
                        })
                    }
                </div>

                <LeftArrow prevSlide={this.prevSlide} />
                <RightArrow nextSlide={this.nextSlide} />

            </div>
        );
    }
}
