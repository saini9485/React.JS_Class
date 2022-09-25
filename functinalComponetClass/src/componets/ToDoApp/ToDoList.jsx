// // //Example:-1 //Adding To-Do
import React, { useState } from "react";
import "./ToDoList.css"
export const ToDoList = () => {
  const [toDo, settoDo] = useState([]);
  const [toDos, setToDoss] = useState("");

  const addItem = () => {
    settoDo([...toDo, toDos]);
    setToDoss("");
  };

  function handleEditInputChange(e) {
    settoDo({ ...settoDo, text: e.target.value });
    console.log(toDo);
  }

  return (
    <div className="toDosMain">
<div className="Container">
    <h1>To-Do List</h1>
      <input
        type="text"
        value={toDos.text}
        placeholder={"Add To-Do"}
        onChange={(e) => setToDoss(e.target.value)}
      />
      <button onClick={addItem} className="AddBtn">Add ToDo</button>
      {toDo.map((item) => (
         <div>
        
          <span>{item}</span>
          <button className="EditBtn" >Edit ToDo</button>
          <button className="DeleteBtn"
            onClick={() => {
              let filteredtoDo = toDo.filter((value) => value !== item);
              settoDo([...filteredtoDo]);
            }}
          >
            delete
          </button> 
        </div> 
      ))}
    </div>
    </div>
  );
};

// import { useEffect, useState } from "react";

// export  function ToDoList () {
//   const [todos, setToDosss] = useState() 
//    
//   const [todo, setToDoss] = useState("");
//   // boolean state to know if we are editing (this will let us display
//   // different inputs based on a condition (conditional rendering)
//   const [isEditing, setIsEditing] = useState(false);
//   // object state to set so we know which todo item we are editing
//   const [currentTodo, setCurrentTodo] = useState({});

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   function handleInputChange(e) {
//     setToDoss(e.target.value);
//   }

//   // function to get the value of the edit input and set the new state
//   function handleEditInputChange(e) {
//     // set the new state value to what's currently in the edit input box
//     setCurrentTodo({ ...currentTodo, text: e.target.value });
//     console.log(currentTodo);
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();

//     if (todo !== "") {
//       setToDoss([
//         ...todos,
//         {
//           id: todos.length + 1,
//           text: todo.trim()
//         }
//       ]);
//     }

//     setToDos("");
//   }

//   function handleEditFormSubmit(e) {
//     e.preventDefault();

//     handleUpdateTodo(currentTodo.id, currentTodo);
//   }

//   function handleDeleteClick(id) {
//     const removeItem = todos.filter((todo) => {
//       return todo.id !== id;
//     });
//     setToDoss(removeItem);
//   }

//   // function to edit a todo item
//   function handleUpdateTodo(id, updatedTodo) {
//     // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
//     // if the id's match, use the second parameter to pass in the updated todo object
//     // otherwise just use old todo
//     const updatedItem = todos.map((todo) => {
//       return todo.id === id ? updatedTodo : todo;
//     });
//     // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
//     setIsEditing(false);
//     // update the todos state with the updated todo
//     setToDoss(updatedItem);
//   }

//   // function to handle when the "Edit" button is clicked
//   function handleEditClick(todo) {
//     // set editing to true
//     setIsEditing(true);
//     // set the currentTodo to the todo item that was clicked
//     setCurrentTodo({ ...todo });
//   }

//   return (
//     <div className="App">
//       {/* We need to conditionally render different inputs based on if we are in editing mode */}
//       {isEditing ? (
//         // if we are editing - display the edit todo input
//         // make sure to add the handleEditFormSubmit function in the "onSubmit" prop
//         <form onSubmit={handleEditFormSubmit}>
//           {/* we've added an h2 element */}
//           <h2>Edit Todo</h2>
//           {/* also added a label for the input */}
//           <label htmlFor="editTodo">Edit todo: </label>
//           {/* notice that the value for the update input is set to the currentTodo state */}
//           {/* also notice the handleEditInputChange is being used */}
//           <input
//             name="editTodo"
//             type="text"
//             placeholder="Edit todo"
//             value={currentTodo.text}
//             onChange={handleEditInputChange}
//           />
//           {/* here we added an "update" button element - use the type="submit" on the button which will still submit the form when clicked using the handleEditFormSubmit function */}
//           <button type="submit">Update</button>
//           {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
//           <button onClick={() => setIsEditing(false)}>Cancel</button>
//         </form>
//       ) : (
//         // if we are not editing - display the add todo input
//         // make sure to add the handleFormSubmit function in the "onSubmit" prop
//         <form onSubmit={handleFormSubmit}>
//           {/* we've added an h2 element */}
//           <h2>Add Todo</h2>
//           {/* also added a label for the input */}
//           <label htmlFor="todo">Add todo: </label>
//           {/* notice that the value is still set to the todo state */}
//           {/* also notice the handleInputChange is still the same */}
//           <input
//             name="todo"
//             type="text"
//             placeholder="Create a new todo"
//             value={todo}
//             onChange={handleInputChange}
//           />
//           {/* here we just added a "Add" button element - use the type="submit" on the button which will still submit the form when clicked using the handleFormSubmit function */}
//           <button type="submit">Add</button>
//         </form>
//       )}

//       <ul className="todo-list">
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             {/* we are passing the entire todo object to the handleEditClick function*/}
//             <button onClick={() => handleEditClick(todo)}>Edit</button>
//             <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
//         }

