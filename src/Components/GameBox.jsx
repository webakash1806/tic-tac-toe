import React, { useState } from 'react'
import Board from './Board'
import ConfettiExplosion from 'react-confetti-explosion';

const GameBox = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        const squaresCopy = squares.slice()
        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return
        }

        squaresCopy[i] = isXNext ? 'X' : 'O'
        setSquares(squaresCopy)
        setIsXNext(!isXNext)
    }

    const winner = calculateWinner(squares)

    let status
    if (winner) {
        status = 'Winner : ' + winner
    } else {
        status = 'Next Player : ' + (isXNext ? 'X' : 'O')
    }




    return (
        <div className=' bg-transparent flex flex-col gap-2 items-center'>
            {status === 'Winner : X' || status === 'Winner : O' && <div className='absolute left-[50%]'>
                <ConfettiExplosion />
            </div>}
            <div>
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div>
                <p className='text-white'>{status}</p>
            </div>
            <button onClick={handleRestart} className='text-white border rounded p-2 px-10 m-2'>Restart</button>
        </div>
    )
}

export default GameBox
