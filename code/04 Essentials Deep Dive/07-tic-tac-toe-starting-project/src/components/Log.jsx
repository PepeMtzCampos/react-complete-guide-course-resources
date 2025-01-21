export default function Log( {turns} ){
    return(
        <ol id="log">
        { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
          turns.map((turn) => 
            <li key={`${turn.square.row}-${turn.square.col}`}>
              Player {turn.player} selected row {turn.square.row}, col {turn.square.col}
            </li>
          )
        }
        </ol>
    );
}