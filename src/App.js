import "./App.css";

import { useState, useReducer } from "react";

import resultReducer from "./reducers/resultReducer";
import Buttonui from "./components/Buttonui";
function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);

	const [result2, dispatch] = useReducer(resultReducer, 10);

	// EVENT HANDLERS
	function handleSumClick() {
		dispatch({
			type: "added",
			payload: {
				firstNumber: firstNumberInput,
				secondNumber: secondNumberInput,
			},
		});
	}

	function handleSubClick() {
		dispatch({
			type: "subtracted",
			payload: {
				firstNumber: firstNumberInput,
				secondNumber: secondNumberInput,
			},
		});
	}

	function handleMultClick() {
		dispatch({
			type: "multiplied",
			payload: {
				firstNumber: firstNumberInput,
				secondNumber: secondNumberInput,
			},
		});
	}

	function handleDivClick() {
		dispatch({
			type: "divided",
			payload: {
				firstNumber: firstNumberInput,
				secondNumber: secondNumberInput,
			},
		});
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>
				
				<button onClick={handleSumClick}><Buttonui opreation = "sum"/></button>
				<button onClick={handleSubClick}><Buttonui opreation = "subtract"/></button>
				<button onClick={handleMultClick}><Buttonui opreation = "multiply"/></button>
				<button onClick={handleDivClick}><Buttonui opreation = "divide"/></button>

				<hr />

				<h2>{result2}</h2>
			</div>
		</div>
	);
}

export default App;
