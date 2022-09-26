import React, { useState } from "react";
export const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [toDo, setToDo] = useState("");

  const addItem = () => {
    setItems([...items, toDo]);
    setToDo("");
  };

  return (
    <>
    <h1>To-Do List</h1>
      <input
        type="text"
        value={toDo.text}
        placeholder={"Add To-Do"}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button onClick={addItem}>Add item</button>
      {items.map((item) => (
         <div>
        
          <span>{item}</span>
          <button
            onClick={() => {
              let filteredItems = items.filter((value) => value !== item);
              setItems([...filteredItems]);
            }}
          >
            delete
          </button>
          
        </div> 
      ))}
    </>
  );
};
