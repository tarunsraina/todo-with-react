import React from "react";
import '../App'
import propTypes from 'prop-types';
import Header from "./header";

export default function todo(props){

    let DeleteButtonStyle = {
        color : "red"
    }
    return(
        <div>
        <center>
            {props.todos.title}
            <br/>
            {props.todos.desc}
            <br/>
            <button style={DeleteButtonStyle} key={props.todos} onClick={()=>{props.onDelete(props.todos)}}>Task Done!</button>
        </center>
        </div>
    )
}

Header.propTypes = {
    todoExist : propTypes.bool
}

