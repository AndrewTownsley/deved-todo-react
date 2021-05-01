import React, {useState} from 'react';
import "./App.css";
// Import Components
import Form from "./components/Form";
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState('');
  return(
    <div className="app">
      <header>
        <h1>React To-Do List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}

export default App;