import React, { useState } from "react";
export const ToDo = () => {
 // const [items, setItems] = useState([]);
//    const [toDo, setToDo] = useState("");

//   const addItem = () => {
//     setItems([...items, toDo]);
//     setToDo("");
//   };
//   function handleEditInputChange(e) {
//     setItems({ ...setItems, text: e.target.value });
//     console.log(items);
//   }

  return (
    <>
    <h1>To-Do List</h1>
      {/* <input
        type="text"
        value={toDo}
        placeholder={"Add To-Do"}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button onClick={addItem}>Add item</button>
      {items.map((item) => (
         <div>
        
          <span>{item}</span>
          <button  >Edit item</button>
          <button
            onClick={() => {
              let filteredItems = items.filter((value) => value !== item);
              setItems([...filteredItems]);
            }}
          >
            delete
          </button>
        </div> 
      ))} */}
    </>
  );
};