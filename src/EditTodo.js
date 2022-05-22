import React from 'react'
import Modal from 'react-modal';
import {useState} from 'react';
function EditTodo({editTodo, el} ) {
const [editedText, setEditedText] = useState(el.text);   
const [modalIsOpen, setIsOpen] = useState(false);
const openModal =()=>{
    setIsOpen(true);
}
const closeModal =()=>{
    setIsOpen(false);
}
const handleEdit =()=>{
    editTodo(el.id, editedText); 
    setIsOpen(false);
}
  return (
    <div>
        <button onClick={openModal}> Edit</button>
        <Modal isOpen={modalIsOpen} 
               onRequestClose={closeModal} >
            <input 
            type="text"
            placeholder="Edit To do"
            value={editedText}
            onChange={(e) => {
                setEditedText(e.target.value);
              }}
             />
            <button onClick={handleEdit} >Save</button>
            <button onClick={closeModal} >Close</button>
        </Modal>
    </div>
  )
}

export default EditTodo