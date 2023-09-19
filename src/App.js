import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const aggnewTask = ()=>{
    if (newTask.trim() !== '') {
      setTask([...tasks, newTask]);
      setNewTask('');
    }
  }

  const deleteTask = (index)=>{
    const tarea = [...tasks];
    tarea.splice(index, 1);
    setTask(tarea);
  }

  const editTask = (index)=>{
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Lista de Videojuegos</h1>
          <input 
          type='text'
          placeholder='Agregar Juego'
          value={newTask}
          onChange={(e)=> setNewTask(e.target.value)}
          />
          <button onClick={aggnewTask}>Guardar</button>
        </div>
        <div>
          <ul>
            {tasks.map((task, index)=>(
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>borrar</button>
                <button onClick={() => editTask(index)}>editar</button>
              </li>
            ))
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
