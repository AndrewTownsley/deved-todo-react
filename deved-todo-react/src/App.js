import React, {useState} from 'react';
import "./App.css";
// Import Components
import Form from "./Components/Form";
import TodoList from './Components/TodoList';


function App() {
// Declaring the STATE items here.
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilteredTodos] = useState([]);
  // Functions/Events
  return(
    <div className="app">
      <header>
        <h1>React To-Do List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos = {todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}/>
      <TodoList setTodos ={setTodos}todos={todos}/>
    </div>
  )
}

export default App;