import React, { useState } from "react";
import Draggable from 'react-draggable'

let Text = () => {
    const [editMode,setEditMode] = useState(false);
    const [val,setVal] = useState('Double click to edit');
    return (
        <Draggable>
            {editMode ? <input onDoubleClick={() => setEditMode(false)} value = {val} onChange={(e) => setVal(e.target.value)}/> : <h1 onDoubleClick={() => setEditMode(true)}>{val} </h1>}
        </Draggable>
    )
}

export default Text;