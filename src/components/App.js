import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    temp: "",
    feelTemp: "",
    wind: "",
    pressure: "",
    humdity: "",
    dateTime: null,
    err: false,
  }



  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `https://api.apixu.com/v1/current.json?key=b6759fc0f17e46ce88d221527190407&q=${this.state.value}`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(`Nie mamy w bazie miasta ${this.state.city}`)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const time = new Date().toLocaleString()
        const { temp_c, feelslike_c, wind_kph, pressure_mb, humidity, is_day } = data.current;
        this.setState(prevState => ({
          err: false,
          date: time,
          city: prevState.value,
          temp: temp_c,
          feelTemp: feelslike_c,
          wind: wind_kph,
          pressure: pressure_mb,
          humdity: humidity,
          dayTime: is_day,
        }))

      })
      .catch(err => {
        // console.log(err)
        this.setState(prevState => ({
          err: true,
          city: prevState.value,
        }))
      })
  }

  render() {
    if (!this.state.condition) {
      document.body.className = "night"
    } else {
      document.body.className = "day"
    }
    return (
      <div className="app">
        <Form
          value={this.state.value}
          inputChange={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;