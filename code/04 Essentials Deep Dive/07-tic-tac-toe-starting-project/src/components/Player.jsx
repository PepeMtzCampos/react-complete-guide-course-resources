import { useState } from "react";
export default function Player({initialName, symbol, isActive}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        //setIsEditing(!isEditing); This is not recommended because it might not be the correct value of isEditing
        setIsEditing((editing) => !editing);
    }

    function handleInputChange(e){
        setPlayerName(e.target.value); //Double way binding
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} required onChange={handleInputChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}