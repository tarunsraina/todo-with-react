
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import Todos from './myComponents/todos';
import React , { useState } from 'react'

function App() {

  let onDelete = (todo) =>{
    console.log("Deleteeeee:"+todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
  }

const [todos ,setTodos] = useState([
    {
      sno : 1,
      title : "Learn HTML",
      desc : "Learn Hyper Text Markup Language"
    },
    {
      sno : 2,
      title : "Learn CSS",
      desc : "Learn CSS for styling"
    },
    {
      sno : 3,
      title : "Learn JS",
      desc : "Learn Javascript for adding functionalities"
    },
    {
      sno : 4,
      title : "Learn React",
      desc : "Learn React framework for for frontend Development"
    },
    {
      sno : 5,
      title : "Learn NodeJS",
      desc : "Learn NodeJS for Backend development"
    },
    {
      sno : 6,
      title : "Learn MongoDB",
      desc : "Learn Mongo for Database operations"
    }
  ]);
  return(
    <>
      <Header title="TODO" name="Todo list."/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  )
}

export default App;
