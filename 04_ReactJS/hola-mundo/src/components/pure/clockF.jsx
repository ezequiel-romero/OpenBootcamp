import React, { useEffect, useState } from 'react';

const ClockF = () => {

    const dataInitialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [data, setData] = useState(dataInitialState);

    useEffect(() => {
        const timerID = setInterval(() => {
            updateData();
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    const updateData = () => {
        return setData({
            fecha: new Date(),
            edad: data.edad + 1,
            nombre: data.nombre,
            apellidos: data.apellidos
        })
    }

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
