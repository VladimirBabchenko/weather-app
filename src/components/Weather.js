import React from "react";

const Weather = ({ temperature, city, country, humidity, description, error }) => (
    <div>
        {city && country && <p>Location: {city}, {country}</p>}
        {temperature && <p>Temperature: {temperature}</p>}
        {humidity && <p>Humidity: {humidity}</p>}
        {description && <p>Conditions:{description}</p>}
        {error && <p>{error}</p>}
    </div >
)

export default Weather;