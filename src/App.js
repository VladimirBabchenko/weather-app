import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "19ecf7155d90f35646b5b48e027ffc38";

class App extends React.Component {

  initialState = () => ({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  })

  state = this.initialState();

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    this.setWeather(data, city, country);
  }

  setWeather(data, city, country) {
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState(() => {
        let newState = Object.assign({}, this.initialState(), { error: "Please Enter the value" })
        return newState;
      });
    }
  }

  render() {
    const { temperature, city, country, humidity, description, error } = this.state;
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error} />
      </div>
    )
  }
}

export default App;