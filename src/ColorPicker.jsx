import { useState } from "react"

function ColorPicker(){

    const[color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker </h1>
            <div className="color-display" style={{backgroundColor:color}}>
            </div>
            <p>Selected Color :<span style={{color:color}}> {color}</span> </p>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}

export default ColorPicker