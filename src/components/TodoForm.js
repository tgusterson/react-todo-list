import React from 'react';
import TodoHeading from './TodoHeading';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentInput: '',
      tasks: []
    };
  }
  handleKeyPress = (e) => {
    if (!e.target.value) {
      return;
    }
    this.setState({
      currentInput: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.currentInput) {
      return;
    }
    const newTask = this.state.currentInput;
    const taskList = this.state.tasks;
    const newTaskList = taskList.concat(newTask);
    this.setState({
      tasks: newTaskList,
      currentInput: ''
    });
    e.target.reset();
  };
  handleClick = (item, index) => {
    const newTaskList = this.state.tasks.slice();
    newTaskList.splice(index, 1);
    this.setState({
      tasks: newTaskList
    });
  };
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState(() => ({ tasks }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }
  render() {
    return (
      <div className="container">
        <TodoHeading title="To-Do" />
        <TodoInput
          handleKeyPress={this.handleKeyPress}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          taskList={this.state.tasks}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}