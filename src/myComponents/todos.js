import React from "react";
import '../App'
import TodoItem from "./todo";

export default function todos(props){
    return(
        <div>
        <center>
            <h2>My Todo List!</h2>
            
                {props.todos.length===0?"No Todos, well done!":
                props.todos.map((todo)=>{
                    return <div> <TodoItem todos={todo} onDelete={props.onDelete}/> <br/> </div>
                })}
                
            
            
        </center>
        </div>
    )
}