import React from 'react';

const Todo = ( {text,todo,todos,setTodos}) => {
  // Events
  const deleteHandler = () => {
    // By putting the onClick Handler on the trash-btn element and assigning it to this function, any code that is run in this function will be applied to the trash-btn.
    // This method checks to see if the id of the trash button being clicked and the todo are the same.  If they are, it filters it out of the array. 
    setTodos(todos.filter((el) => el.id !== todo.id))
    // console.log(todo);
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
          // if the id of the item matches the id of the todo, take the properties of that item(...item) and change the completed property to the opposite of what it is.
        }
      }
      return item;
      // Don't forget to return the item after it has been changed from completed to uncompleted
    }))
  }

  return(
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button 
        onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo;