import React from "react";
import '../App'
import propTypes from 'prop-types';
export default function Header(props){
    let aTagStyle = {
       textDecoration : "none"
    }
    return(
        <div>
        <center>
        <a href="https://www.github.com/tarunsraina" style={aTagStyle}>github  </a>
        |
        <a href="https://www.codechef.com" style={aTagStyle}>  codechef  </a>
        |
        <a href="https://www.cumulations.com" style={aTagStyle}>  company  </a>
        <center className="HeaderTitle">
            <h3>Title : {props.title} | Name : {props.name}</h3> 
        </center>
        </center>
        </div>
    )
}

Header.propTypes = {
    title : propTypes.string
}

Header.defaultProps = {
    title : "Default title"
}