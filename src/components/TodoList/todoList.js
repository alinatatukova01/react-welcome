import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { text: "go to party", id: 1 },
        { text: "meet friens", id: 2 },
        { text: "go for a walk", id: 3 },
      ],
    };
  }

  deleteRender(event){
    //через ивент вытягиваем переданное через датасет айдишник таски
    const id = Number(event.currentTarget.dataset.id);

    const newArr = this.state.tasks.filter((task) => (task.id !== id)); //фильтруем массив, если чей то таск айди совпадает с айди переданным из датасет при нажатии кнопки, то оставляем всё, кроме этого элемента
    this.setState({
        tasks: newArr,
    })
  }

  renderTasks() {
    const tasks = this.state.tasks;
    return tasks.map((task) => 
    <li key={task.id}>{task.text} <button data-id = {task.id} onClick={(event) => {this.deleteRender(event)}}>Delete</button></li>
    );
  }

  render() {
    return (
      <>
        <ul>{this.renderTasks()}</ul>
      </>
    );
  }
}

export default TodoList;
