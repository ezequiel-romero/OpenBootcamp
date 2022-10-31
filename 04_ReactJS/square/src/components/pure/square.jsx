import React, { useState } from 'react';

const Square = () => {

    const red = '000'
    const green = '000'
    const blue = '000'

    const backgroundInitial = {
        backgroundColor: `rgb(${red},${green},${blue})`
    }

    const [background, setBackground] = useState(backgroundInitial)
    const [bgInterval, setBgInterval] = useState(0);

    const randomNumber = () => {
        return Math.floor(Math.random() * 256)
    }

    const changeBackground = () => {
        const newRed = randomNumber()
        const newGreen = randomNumber()
        const newBlue = randomNumber()
        const newBackground = {
            backgroundColor: `rgb(${newRed},${newGreen},${newBlue})`
        }
        setBackground(newBackground)
    }

    const startChangeBackground = () => {
        return setBgInterval(setInterval(changeBackground,500))
    }

    const stopChangeBackground = () => {
        return clearInterval(bgInterval)
    }

    return (
        <div>
            <div className='square'
                onMouseEnter={startChangeBackground}
                onMouseLeave={stopChangeBackground}
                onDoubleClick={stopChangeBackground}
                style={background}>
            </div>
        </div>
    );
}

export default Square;
