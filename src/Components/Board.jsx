import React, { useState } from 'react'
import Square from './Square'

const Board = ({ squares, onClick }) => {
    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />
    }
    return (
        <div className='w-fit gap-1 grid grid-cols-3'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    )
}


export default Board
