
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard( {onSelectSquare, turns} ) {

    //85. Computed value derived from the turns prop
    let gameBoard = initialGameBoard;

    turns.forEach(turn => {
        const {square, player} = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    });

    //alternative way to calculate
    // turns.forEach(turn => {
    //     gameBoard[turn.square.row][turn.square.col] = turn.player;
    // });

    return (

        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={`${rowIndex}`}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={`${rowIndex}-${colIndex}`} className="cell">
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>                
            ))}
        </ol>
    );
}
