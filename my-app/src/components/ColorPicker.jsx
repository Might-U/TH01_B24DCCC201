import { useState } from "react";
function ColorPicker() {
    const[color, setColor] = useState("white");
    return(
        <div>
            <h2>Bai 2: Color Picker</h2>
            <div
            style={{
                width:"150px",
                height:"150px",
                border:"1px solid black",
                marginBottom:"10px",
                backgroundColor: color,
            }}
        ></div>
        <button onClick={() => setColor("red")}>Do</button>
        <button onClick={() => setColor("green")}>Xanh</button>
        <button onClick={() => setColor("yellow")}>Vang</button>
         </div>
    );
}
export default ColorPicker;