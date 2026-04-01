import { useEffect, useState } from "react";

export default function Task(){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    
    useEffect(()=>{
        fetch('https://dummyjson.com/todos?limit=3')
        .then(resp => resp.json())
        .then(data=>{
            const list = data.todos.map(todo => todo.todo);
            setTasks([...tasks, ...list])
        })
    }, [])

    const addTask = (e)=>{
        e.preventDefault();
        setTasks([...tasks, task]);
    }

    return (
        <div className="tasks card">
            <h2>Tasks:</h2>
            
            <form onSubmit={addTask}>
                <input value={task} onChange={e=>setTask(e.target.value)}/>
                <button >Create new</button>
            </form>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    ); 

}