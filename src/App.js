// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  

   const  addItem = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo]);
    }
    setNewTodo('');
  };

 

  const deleteItem = (index) => {
    const updatedTodos = todos.filter((_,i) => i !== index);
    setTodos(updatedTodos);
   
  };

  return (
    <div id='todo'>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        
      </div>
      <button onClick={addItem}>Add</button>
     <ul>
          {
            todos.map((todo,index) => (
          <li key={index}>
            {todo}
            <button onClick={ () => deleteItem(index)}>Delete</button>
          </li>
            ))
          }
      </ul>
      
    </div>
  );
}

export default App;


