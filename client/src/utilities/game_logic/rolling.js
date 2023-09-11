import {useState, useEffect} from "react";
import "./styles.css";
import React from "react";

export default function RollingDice({
	d1,
	setD1,
	d2,
	setD2,
	diceValue,
	setDiceValue,
	setDidGo
}) {
	const [doubles, setDoubles] = useState(0);
	const [d3, setD3] = useState(2);
	const [d4, setD4] = useState(5);
	const [loading, setLoading] = useState(false);

	let doublesText = "";

	useEffect(() => {
		if (d1 === d2 && d1 !== 0) {
			setDoubles(doubles + 1);
		}
		if (d1 !== d2) {
			setDoubles(0);
		}
		setDiceValue(d1 + d2);
	}, [d1, d2, diceValue]);

	function singleDieRoll() {
		let roll = Math.ceil(Math.random() * 6);
		return roll;
	}

	function loadingDiceRoll() {
		setLoading(true);
		rollDice();

		let loadingDice = setInterval(() => {
			setD3(singleDieRoll());
			setD4(singleDieRoll());
		}, 25);

		setTimeout(() => {
			setLoading(false);
			clearInterval(loadingDice);
		}, 500);
	}

	function rollDice() {
		setD1(singleDieRoll());
		setD2(singleDieRoll());
		setDidGo(true);
	}

	if (doubles === 0) {
		doublesText = "";
	}
	if (doubles === 1) {
		doublesText = "This is your first Doubles";
	}
	if (doubles === 2) {
		doublesText = "Second Doubles. Careful now!";
	}
	if (doubles === 3) {
		doublesText = "Straight to jail";
	}

	return (
		<div className="App">
			<h1>Dice</h1>
			{loading ? (
				<div>
					<div className="diceBlock">
						<div className="dieFace">
							<h3>{d3}</h3>
						</div>
						<div className="dieFace">
							<h3>{d4}</h3>
						</div>
					</div>
					<div className="doublesPlace"></div>
				</div>
			) : (
				<div>
					<div className="diceBlock">
						<div className="dieFace">
							<h3>{d1}</h3>
						</div>
						<div className="dieFace">
							<h3>{d2}</h3>
						</div>
					</div>
					{doubles === 0 ? (
						<div className="doublesPlace"> </div>
					) : (
						<div>{doublesText}</div>
					)}
				</div>
			)}
			<button
				className="rollButton"
				onClick={() => loadingDiceRoll(props.currentPlayer, d1, d2)}
			>
				Roll
			</button>
		</div>
	);
}
