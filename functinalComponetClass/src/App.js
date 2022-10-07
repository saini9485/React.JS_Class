//import { UseRef } from './componets/UseRef';
import './App.css';
import About from './componets/Router/About';
import Contact from './componets/Router/Contact';
import Home from './componets/Router/Home';
import { Route, Routes } from "react-router-dom";
import Header from './componets/Router/Header';
//import { MemoCounter } from './componets/UseMemoHook.jsx/MemoCounter';
//import { ReducerCounter } from './componets/ReducerHook/ReducerWithObject';
//import { ReducerCounter } from './componets/ReducerHook/ReducerCounter';
//import { Parent } from './componets/ContextApi/Parent';
//import { Parent } from './componets/UseContext/Parent';
//import { CounterApp } from './componets/CounterApp/Counter';
//import {CounterString} from "./componets/CounterApp/CounterString"
//import { ToDoList } from './componets/ToDoApp/ToDoList';
//import { StateWithObject } from './componets/CounterApp/StateWithObject';
//import {CountHooks} from './componets/CounterApp/CountHooks'
//import { StateWithArray } from './componets/StateWithArray';
//import {ChangeTitleHook} from "./componets/ChangeTitleHook"
//import {UseReducer} from "./componets/ReducerHook/ReducerCounter"
function App() {
  return (
    <div>
      {/* <CountHooks /> */}
      {/* <StateWithArray /> */}
      {/* <StateWithObject /> */}
      {/* { < ToDoList/> } */}
      {/* <ChangeTitleHook /> */}
      {/* < CounterApp /> */}
      {/* < CounterString /> */}
      {/* <UseRef /> */}
      {/* <Parent /> */}
      {/* <Parent/> */}
      {/* <ReducerCounter/> */}
      {/* <UseReducer/> */}
      {/* <ReducerCounter/> */}
      {/* <MemoCounter/> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
