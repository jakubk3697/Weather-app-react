import React from 'react';
import './Result.css'

const Result = props => {
    const { date, err, city, temp, feelTemp, wind, pressure, humdity } = props.weather

    let content = null

    if (!err && city) {
        content = (
            <>
                <h1 className="cityTitle">Wyniki wyszukiwania dla: <span>{city}</span></h1>
                <p>Dane dla dnia i godziny: <strong>{date}</strong></p>
                <p>Temperatura: <strong>{temp}°C</strong></p>
                <p>Temperatura odczuwalna: <strong>{feelTemp}°C</strong></p>
                <p>Prędkość wiatru: <strong>{wind}km/h</strong></p>
                <p>Ciśnienie atmosferyczne: <strong>{pressure}hPa</strong></p>
                <p>Wilgotność powietrza: <strong>{humdity}%</strong></p>
            </>
        )
    }

    return (
        <div className="result">
            {err ? `Brak w bazie ${city}` : content}
        </div>
    );
}

export default Result;