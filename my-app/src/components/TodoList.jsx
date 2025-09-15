import { useState } from "react";
function TodoList() {
    const[tasks, setTasks] = useState([]);
    const[input, setInput] = useState("");
    const addTask = () => {
        if(input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    return(
        <div style={{ marginBottom: "40px"}}>
            <h2>Bai 1: To-do List</h2>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhap cong viec..."
            />
            <button onClick={addTask}>Them</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}<button onClick={() => removeTask(index)}>Xoa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    }

export default TodoList;