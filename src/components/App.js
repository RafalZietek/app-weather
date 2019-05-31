import React, { Component } from 'react';
import './../styles/App.css';
import Form from './Form';
import Result from './Result';

//klucz do API
const APIKey = 'ed17f9a60733c7abbf0b0d755999092a';


class App extends Component {
	state = {
		value: '',
		date: '',
		city: '',
		sunrise: '',
		sunset: '',
		temp: '',
		wind: '',
		pressure: '',
		temp_min: '',
		temp_max: '',
		humidity: '',
		err: ''
	}
	handleInputChange = e => {
		this.setState({
			value: e.target.value
		})
	}

	handleCitySubmit = e => {
		e.preventDefault();

		const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
		// http://api.openweathermap.org/data/2.5/weather?q=krakow&APPID=ed17f9a60733c7abbf0b0d755999092a&units=metric
		fetch(API)
			.then(response => {
				if (response.ok) {
					return response;
				}
				throw Error('nie udało się')
			})
			.then(response => response.json())
			.then(data => {
				const time = new Date().toLocaleString();
				this.setState(prevState => ({
					err: false,
					date: time,
					city: prevState.value,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					temp: data.main.temp,
					wind: data.wind.speed,
					pressure: data.main.pressure,
					temp_min: data.main.temp_min,
					temp_max: data.main.temp_max,
					humidity: data.main.humidity,
				}))
			})
			.catch(err => {
				console.log(err);
				this.setState(prevState => {
					return {
						err: true,
						city: prevState.value,
					}
				})
			})
	}

	render() {
		return (
			<div className="app">
				<Form
					value={this.state.value}
					change={this.handleInputChange}
					submit={this.handleCitySubmit}
				/>
				<Result weather={this.state} />
			</div>
		);
	}
}

export default App;


