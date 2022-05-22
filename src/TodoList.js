import React from 'react'
import Todo from './Todo';
function TodoList({todos, deleteTodo, editTodo} ) {
  return (
    <div>
        {todos.map((el) => (
        <Todo el={el}  deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  )
}

export default TodoList