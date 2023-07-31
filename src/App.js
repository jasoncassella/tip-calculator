function App() {
	return (
		<main>
			<Bill />
			<Service id={'serviceInput'}>How much did you like the service?</Service>
			<Service id={'friendServiceInput'}>
				How much did your friend like the service?
			</Service>
		</main>
	);
}

function Bill() {
	return (
		<div>
			<label htmlFor='billInput'>How much was the bill?</label>
			<input id='billInput'></input>
		</div>
	);
}

function Service(props) {
	return (
		<div>
			<label htmlFor={props.id}>{props.children}</label>
			<input id={props.id}></input>
		</div>
	);
}

export default App;
