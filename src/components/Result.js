import React from 'react';
import './../styles/Result.css';


const Result = props => {
	const { err, city, temp, date, sunrise, sunset, wind, pressure } = props.weather;

	let content = null;
	if (!err && city) {
		const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
		const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

		content = (
			<React.Fragment>
				<h3>Wyniki wyszukiwania dla miasta <em>{city}</em></h3>
				<h4>Dane aktualne dla dnia i godziny: {date}</h4>
				<h4>Aktualna temperatura: {temp} &#176;C</h4>
				<h4>Wschód słońca: {sunriseTime}</h4>
				<h4>Zachód słońca: {sunsetTime}</h4>
				<h4>Aktualna siła wiatru: {wind} m/s</h4>
				<h4>Aktualne ciśnienie: {pressure} hPa</h4>
			</React.Fragment>
		)
	}

	return (
		<div className='result'>
			{err ? `Nie ma w bazie danych miasta ${city}` : content}
		</div>
	)

}

export default Result;