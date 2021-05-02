import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
// Here is where you write your Javacript

// The inputTextHandler function sets 'setInputText' as the value of the input box.
  const inputTextHandler = (e) => {
  setInputText(e.target.value);
  };

// The submitTodoHandler function submits the text from the input, creating the actual TODO element
// It then clears the text from the input field after it has been submitted.
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
    ]);    
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return(
    <form>
    <input 
    value={inputText} // this updates the STATE of the input with the input.value 
    onChange={inputTextHandler} 
    type="text" 
    className="todo-input" 
    />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange="statusHandler" name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  )
}

export default Form;