import { useState } from 'react';

function App() {
	const [bill, setBill] = useState(0);
	const [tip1, setTip1] = useState(0.15);
	const [tip2, setTip2] = useState(0.15);

	return (
		<main>
			<Bill bill={bill} setBill={setBill} />
			<Service id={'serviceInput'} tip={tip1} setTip={setTip1}>
				How much did you like the service?
			</Service>
			<Service id={'friendServiceInput'} tip={tip2} setTip={setTip2}>
				How much did your friend like the service?
			</Service>
			<Display bill={bill} tip1={tip1} tip2={tip2} />
		</main>
	);
}

function Bill({ bill, setBill }) {
	return (
		<div>
			<label htmlFor='billInput'>How much was the bill?</label>
			<input
				id='billInput'
				value={bill}
				onChange={e => setBill(Number(e.target.value))}></input>
		</div>
	);
}

function Service(props) {
	return (
		<div>
			<label htmlFor={props.id}>{props.children}</label>
			<select
				id={props.id}
				onChange={e => props.setTip(Number(e.target.value))}
				value={props.tip}>
				<option value={0.15}>It was great (15%)</option>
				<option value={0.1}>It was good (10%)</option>
				<option value={0.05}>It was bad (5%)</option>
				<option value={0.0}>It was awful (0%)</option>
			</select>
		</div>
	);
}

function Display(props) {
	const avgTip = (props.tip1 + props.tip2) / 2;
	const totalTip = props.bill * avgTip;
	const total = props.bill + totalTip;
	return (
		props.bill > 0 && (
			<h1>
				you pay ${total} (${props.bill} + ${totalTip} tip)
			</h1>
		)
	);
}

export default App;
