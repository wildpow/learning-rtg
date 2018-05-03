import React from 'react';
import ReactDOM from 'react-dom';


class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: ['fef'],
      newToDos:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = () => {
    const ToDos = this.state.newToDos;
    const newToDos = {name: this.state.toDos, id: this.state.toDos + this.state.toDos.length};
    this.state.toDos.push(newToDos);
    this.setState({newToDos: newToDos, toDos: ""});
};

handleNewTodo = event => {
  this.setState({newToDo: event.target.value});
};

render() {
  return(
    <div>
      <h1>{this.state.title}</h1>
    </div>
  )
  
}

}
export default ToDoList
