import {useEffect} from "react";
import "./styles.css";

export default function Moving({
	diceValue,
	d1,
	d2,
	players,
	setPlayers,
	currentPlayer,
	setCurrentPlayer,
	didGo,
	setDidGo
}) {
	console.log("hi", players[currentPlayer].position);

	useEffect(() => {
		setPlayers((playerKeys) => {
			const playerIndex = playerKeys.findIndex(
				(item) => item.id === currentPlayer
			);
			console.log("hi", players[currentPlayer].position);
			if (players[currentPlayer].position + diceValue > 50) {
				return [
					...playerKeys.slice(0, playerIndex),
					{
						// spread all the other items in the object and update only the score
						...playerKeys[playerIndex],
						position: playerKeys[playerIndex].position + diceValue - 50
					},
					...playerKeys.slice(playerIndex + 1)
				];
			} else {
				return [
					...playerKeys.slice(0, playerIndex),
					{
						// spread all the other items in the object and update only the score
						...playerKeys[playerIndex],
						position: playerKeys[playerIndex].position + diceValue
					},
					...playerKeys.slice(playerIndex + 1)
				];
			}
		}, [diceValue, d1, d2]);

		console.log("bye", players[currentPlayer].position);

	});

	const filler = {name: "", cost: 25, playerCount: 0};
	const board = new Array(50);
	board.fill(filler);

	function endTurn() {
		setDidGo(false);
		if (currentPlayer >= 3) {
			setCurrentPlayer(0);
		} else {
			setCurrentPlayer(currentPlayer + 1);
		}
	}

	return (
		<div className="App">
			<div className="board">
				{board.map((box, index) => {
					for (let i = 0; i < players.length; i++) {
						return (
							<div key={index} className="square">
								{players[i].position === index ? (
									<div className={players[i].name}></div>
								) : null}
								{players[i + 1].position === index ? (
									<div className={players[i + 1].name}></div>
								) : null}
								{players[i + 2].position === index ? (
									<div className={players[i + 2].name}></div>
								) : null}
								{players[i + 3].position === index ? (
									<div className={players[i + 3].name}></div>
								) : null}
							</div>
						);
					}

					return <div key={index} className="square"></div>;
				})}
			</div>
			<div className="display">
				Current Player: Player {players[currentPlayer].name}
				<div className="buttons">
					{didGo ? (
						<button onClick={endTurn}>End Turn</button>
					) : (
						<button disabled={true}>End Turn</button>
					)}
				</div>
			</div>
		</div>
	);
}
