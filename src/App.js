import { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

const App = ()=>{
    const [tasktaker, setTasktaker] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask)=>{
        setTasks(
            (oldTask)=> [...oldTask,tasktaker]
            )
        setTasktaker('');
    }

    const delTask = (id)=>{
        console.log(id);
        setTasks((oldTask)=>{
            return oldTask.filter((arr, index)=>{
                return index !== id;
            })
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <div className="top">
                        <h1>Todo List</h1>
                    </div>
                    <div className="input-wrapper">
                    <input type="text" placeholder="Add a Item" value={tasktaker} onChange={(e)=>setTasktaker(e.target.value)}/>
                    <button className="circle" onClick={()=>addTask(tasktaker)}>+</button>
                    </div>

                    <ul>
                        {
                            tasks.map((taskval, index)=>{
                                return <Todolist key={index} id={index} value={taskval} onSubmit={delTask}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App;