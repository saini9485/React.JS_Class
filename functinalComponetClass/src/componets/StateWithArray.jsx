//Example:-1 //Adding fruit

import React, { useState } from "react";
export const StateWithArray = () => {
  const [items, setItems] = useState([]);
  const [fruit, setFruit] = useState("");

  const addItem = () => {
    setItems([...items, fruit]);
    setFruit("");
  };

  return (
    <>
      <input
        type="text"
        value={fruit}
        placeholder={"add fruit"}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addItem}>Add item</button>
      {items.map((item) => (
         <div>
        
          <span>{item}</span>
          <button onClick={addItem}>Edit item</button>
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




