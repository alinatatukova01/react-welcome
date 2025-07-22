import React from "react";
import Item from "./Item";
import Header from "./Header";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { text: "go to party", id: 1 },
        { text: "meet friens", id: 2 },
        { text: "go for a walk", id: 3 },
      ],
      clickItem : {
        text: '',
        id: null
      }
    };
  }

  deleteRender(id) {

    const newArr = this.state.tasks.filter((task) => task.id !== id); //фильтруем массив, если чей то таск айди совпадает с айди переданным из датасет при нажатии кнопки, то оставляем всё, кроме этого элемента
    this.setState({
      tasks: newArr,
    });
  }

    clickText(id, itemText){
    this.setState({
      clickItem: {
        text: itemText,
        id: id,
      }
    })
  }

  renderTasks() {
    const tasks = this.state.tasks;
    return tasks.map(
      (task) => <Item   key={task.id} text={task.text} id={task.id} changeParentState = {() => {this.deleteRender(task.id)}} selectedId = {this.state.clickItem.id} selectedItem = {() => {this.clickText(task.id, task.text)}}/>

    );
  }



  render() {
    return (
      <>
        <Header text = {this.state.clickItem.text}/>
        <ul>{this.renderTasks()}</ul>
      </>
    );
  }
}

export default TodoList;
