import React from 'react';
import './TicTacToe.css';


const TicTacToe = () => {
	const [turn, setTurn] = React.useState('x');
	const [cell, setCell] = React.useState(Array(9).fill(''));
	const [winner, setWinner] = React.useState();

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cell[num]}</td>;
	};

	const checkWinner = (squares) => {
		const combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			dia: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((e) => {
				if (
					squares[e[0]] === '' ||
					squares[e[1]] === '' ||
					squares[e[2]] === ''
				) {
				} else if (
					squares[e[0]] === squares[e[1]] &&
					squares[e[1]] === squares[e[2]]
				) {
					setWinner(squares[e[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		let squares = [...cell];

		if (squares[num] !== '') {
			alert('occupied');
			return;
		}
		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}
		checkWinner(squares);
		setCell(squares);
	};

	const playagain = () => {
		setCell(Array(9).fill(''));
		setTurn('x');
        setWinner(null);
	};
	return (
		<div className="container">
			<h1>Welcome to TicTacToe</h1>
			<h3>Turn: {turn}</h3>
			<table>
				<tbody>
					<tr>
						<Cell num={0}></Cell>
						<Cell num={1}></Cell>
						<Cell num={2}></Cell>
					</tr>
					<tr>
						<Cell num={3}></Cell>
						<Cell num={4}></Cell>
						<Cell num={5}></Cell>
					</tr>
					<tr>
						<Cell num={6}></Cell>
						<Cell num={7}></Cell>
						<Cell num={8}></Cell>
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>'{winner}' is the winner</p>
					<button onClick={() => playagain()}>
						play again
					</button>
				</>
			)}
		</div>
	);
};

export default TicTacToe;
