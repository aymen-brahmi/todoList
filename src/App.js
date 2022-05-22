import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {useState} from 'react';
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "task 1" },
    { id: 2, text: "task2" },
    { id: 3, text: "task3" }
  ]);
  const addHandler = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo =(id)=>{
  setTodos (todos.filter((el)=>el.id !== id ) )
  }

  const editTodo =(id,editedText)=>{
    setTodos(todos.map((el) => (el.id === id ? { ...el, text: editedText } : el)));
  };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <AddTodo addHandler={addHandler} />
    </div>
  );
}

export default App;
