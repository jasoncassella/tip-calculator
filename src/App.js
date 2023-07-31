function App() {
	return (
		<>
			<Bill />
			<Service input={'serviceInput'}>
				How much did you like the service?
			</Service>
			<Service input={'friendServiceInput'}>
				How much did your friend like the service?
			</Service>
		</>
	);
}

function Bill() {
	return (
		<div>
			<label htmlFor='billInput'>How much was the bill?</label>
			<input></input>
		</div>
	);
}

function Service(props) {
	return (
		<div>
			<label htmlFor={props.input}>{props.children}</label>
			<input></input>
		</div>
	);
}

export default App;
