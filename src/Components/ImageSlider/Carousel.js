import React, { Component } from 'react';
import Slide from './Slide';
import Arrow from './Arrow';
import Crys1 from '../../images/crys1.jpg';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImgIndex: 0,
            images: [Crys1]
        };
    }

        prevSlide = () => {
            const lastIndex = this.state.images.length -1;
            const { currentImgIndex } = this.state;
            const shouldResetIndex = currentImgIndex === 0;
            const index = shouldResetIndex ? lastIndex : currentImgIndex - 1;

            this.setState({
                currentImgIndex: index
            })
        }

        nextSlide = () => {
            const lastIndex = this.state.images.length - 1;
            const { currentImgIndex } = this.state;
            const shouldResetIndex = currentImgIndex === lastIndex;
            const index = shouldResetIndex ? 0 : currentImgIndex + 1;

            this.setState({
                currentImgIndex: index
            })
        }

    
    render() {
        return (
            <div className='carousel'>
                <Arrow
                    direction='left'
                    clickFunction={this.prevSlide}
                    glyph='&#9664;' 
                />

                <Slide url={ this.state.images[this.state.currentImgIndex] } />

                <Arrow
                    direction='right'
                    clickFunction={this.nextSlide}
                    glyph='&#9654;' 
                />
                    
            </div>
        );
    }
}