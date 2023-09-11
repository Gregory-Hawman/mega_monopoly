import {useState} from "react";
import Moving from "./moving";
import RollingDice from "./RollingDice";
import "./styles.css";

export default function App() {
	const [d1, setD1] = useState(0);
	const [d2, setD2] = useState(0);
	const [diceValue, setDiceValue] = useState(0);
	const [didGo, setDidGo] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [players, setPlayers] = useState([
		{
			id: 0,
			name: "one",
			color: "red",
			position: 0
		},
		{
			id: 1,
			name: "two",
			color: "green",
			position: 0
		},
		{
			id: 2,
			name: "three",
			color: "blue",
			position: 0
		},
		{
			id: 3,
			name: "four",
			color: "yellow",
			position: 0
		}
	]);

	return (
		<div>
			<Moving
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				diceValue={diceValue}
				didGo={didGo}
				setDidGo={setDidGo}
				players={players}
				setPlayers={setPlayers}
			/>
			<RollingDice
				d1={d1}
				setD1={setD1}
                d2={d2}
                setD2={setD2}
				currentPlayer={currentPlayer}
				setPlayers={setPlayers}
				diceValue={diceValue}
				setDiceValue={setDiceValue}
				didGo={didGo}
				setDidGo={setDidGo}
			/>
		</div>
	);
}