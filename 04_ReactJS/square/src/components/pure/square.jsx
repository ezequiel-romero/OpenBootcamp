import React, { useState } from 'react';

const Square = () => {

    const red = '000'
    const green = '000'
    const blue = '000'

    const backgroundInitial = {
        backgroundColor: `rgb(${red},${green},${blue})`
    }

    const [background, setBackground] = useState(backgroundInitial);

    // Random number between 0 and 255
    function randomIntFromInterval() {
        return Math.floor(Math.random() * (255 - 0 + 1) + 0)
    }

    const newBackground = () => {
        const newRed = randomIntFromInterval()
        const newGreen = randomIntFromInterval()
        const newBlue = randomIntFromInterval()
        const newBackground = {
            backgroundColor: `rgb(${newRed},${newGreen},${newBlue})`
        }
        setBackground(newBackground)
    }

    const changeBackground = () => {
        const myInterval = setInterval(newBackground, 500)
        return myInterval
    }

    const stopChangeBackground = (myInterval) => {
        clearInterval(myInterval)
        setBackground(backgroundInitial)
    }

    return (
        <div>
            <div className='square' onMouseEnter={changeBackground} style={background}></div>
            <button onClick={stopChangeBackground}>Stop</button>
        </div>
    );
}

export default Square;
