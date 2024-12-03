import { useState } from 'react'
import TodoList from './TodoList'; // Importamos el componente que renderiza la lista de tareas.
import TodoInput from './TodoInput'; // Importamos el componente que permite agregar tareas.
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]); // Estado inicial, una lista vacía para almacenar las tareas.

  // Función para agregar una nueva tarea
  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }, // Añadimos una nueva tarea con un ID único.
    ]);
    /*
    const newTask = { id: Date.now(), text, completed: false }; 
    setTasks([...tasks, newTask]);
    */
  };

  // Función para marcar una tarea como completada
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ); // Si el ID coincide, cambiamos el estado `completed` al contrario de su valor actual.
    setTasks(updatedTasks); // Actualizamos el estado con las tareas modificadas.
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id); // Filtramos todas las tareas menos la que tiene el ID especificado.
    setTasks(filteredTasks); // Actualizamos el estado con la lista filtrada.
  };

  return (
    <div>
      <h1>To-Do List</h1> {/* Título de la aplicación */}
      <TodoInput addTask={addTask} /> {/* Componente para añadir tareas */}
      <TodoList 
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        setTasks = {setTasks}
      /> 
    </div>
  );
}

export default App; // Exportamos el componente para que pueda ser usado en el proyecto.