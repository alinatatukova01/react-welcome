import React from "react"

function Item(props) {
    const buttonDeleteHandler = () => {
        props.changeParentState();
    }
    return(
        <li>{props.text} <button onClick={() => {buttonDeleteHandler()}}>Delete</button></li>
    )
}

export default Item;