import React from 'react';
import EditTodo from './EditTodo';


function Todo({el, deleteTodo, editTodo} ) {
    
  return (
    <div className="todos">
         <h3>{el.text}</h3>
         <EditTodo editTodo={editTodo} el={el} />
         <button onClick={()=>{deleteTodo(el.id)}}> delete</button>
      
    </div>
  )
}

export default Todo