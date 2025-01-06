import { useState } from "react";
export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        //setIsEditing(!isEditing); This is not recommended because it might not be the correct value of isEditing
        setIsEditing((editing) => !editing);
    }

    return(
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{name}</span> : <input type="text" defaultValue={name} required/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}