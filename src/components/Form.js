import React from 'react';
// import './../styles/Form.css';


const Form = (props) => {
	return (
		<form onSubmit={props.submit}>
			<input
				type='text'
				value={props.value}
				onChange={props.change}
				placeholder='Wpisz miasto...'
			/>
			<button>Wyszukaj miasta</button>
		</form>

	)
}

export default Form;
