import React from 'react'
import {useState} from 'react';
function AddTodo({addHandler} ) {
    const [input, setInput] = useState("");
    const inputHandler = (event) => {
        setInput(event.target.value);
      };
    const addTodo = () => {
        addHandler({
          id: Math.random(),
          text: input
        });
        setInput("");
      };
      
  return (
    <div>
        <input onChange={inputHandler} type="text" value={input} />
        <button onClick={addTodo}>Add TODO</button>

    </div>
  )
}

export default AddTodo