
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';// {Todos} if named export is used - eg const Todos = () => {}
import { About } from './Components/About';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function App() {
  //let x = 200;

  // react only re renders when state is changed and to keep track of state change, useState should be used
  //todos - initial state
  //setTodos - function that updates the state
  const [todos, setTodos] = useState(localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos")));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //whenever todos is changed, the function will be called

  //sno - used in jsx as key
  function del(todo) {
    console.log(todo);
    //todos.splice(todos.indexOf(todo), 1);
    //deleting like this does not work in react, use state hook

    //in react
    setTodos(todos.filter((ele) => ele !== todo))

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function add(todo) {
    console.log(todo);


    const next_sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    setTodos([...todos, { sno: next_sno, title: todo }]); // may not immediately change todos, hence, next line may not work
    //thus, we use useEffect hook
  }

  return ( //this is jsx, not html
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos todos={todos} del={del} add={add} />} ></Route>
        <Route path="/about" element={<About />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}


