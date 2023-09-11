import {useState} from "react";

const INITIAL_SCORES = [
	{id: 1001, score: 250},
	{id: 1002, score: 100},
	{id: 1003, score: 300}
];

function Scores() {
	const [score, setScore] = useState(INITIAL_SCORES);

	const incrementScore = (currentId) => {
		setScore((existingItems) => {
			const itemIndex = existingItems.findIndex(
				(item) => item.id === currentId
			);
			return [
				...existingItems.slice(0, itemIndex),
				{
					// spread all the other items in the object and update only the score
					...existingItems[itemIndex],
					score: existingItems[itemIndex].score + 1
				},
				...existingItems.slice(itemIndex + 1)
			];
			//   return existingItems.map((item) => {
			//     return item.id === currentId
			//       ? { ...item, score: item.score + 1 }
			//       : item;
			//   });
		});
	};

	return (
		<div className="App">
			<ul>
				{score.map((item) => {
					return (
						<li key={item.id}>
							<span>{item.score}</span>
							<button title="increment" onClick={() => incrementScore(item.id)}>
								+
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Scores;
