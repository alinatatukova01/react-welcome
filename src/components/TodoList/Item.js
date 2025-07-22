import React from "react";
import './todoList.css'

function Item(props) {
    const buttonDeleteHandler = () => {
        props.changeParentState();
    }

    const liHandler = () => {
        props.selectedItem();
    }

    const isSelcted = props.id === props.selectedId ? 'borderItem' : ''
    return(
        <li onClick={() => {liHandler()}} className={isSelcted}>{props.text} <button onClick={() => {buttonDeleteHandler()}}>Delete</button></li>
    )
}

export default Item;