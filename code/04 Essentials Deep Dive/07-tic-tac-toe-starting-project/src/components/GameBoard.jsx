import React, { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard( {onSelectSquare, activePlayerSymbol} ) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(row => [...row])]; // Update state immutably
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });

        onSelectSquare();
    }

    return (

        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={`${rowIndex}`}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={`${rowIndex}-${colIndex}`} className="cell">
                                <button onClick={
                                    () => handleSelectSquare(rowIndex, colIndex) //To call the function with the arguments when is clicked and not when the component is rendered
                                    }>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>                
            ))}
        </ol>
    );
}
