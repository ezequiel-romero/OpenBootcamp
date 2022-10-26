import React, { useEffect, useState } from 'react';

const ClockF = (props) => {

    const dataInitialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [data, setData] = useState(dataInitialState);

    useEffect(() => {
        const timerID = setInterval(() => {
            setData((prevState) => {
                let edad = prevState.edad + 1;
                return {
                    ...prevState,
                    fecha: new Date(),
                    edad
                }
            })
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default ClockF;
