import React from 'react';

const TodoList = (props) => {
  const listItems = props.taskList.map((item, i) => {
    return (
      <li
        key={i}
        className="todo-item"
      >
        {item}
        <button
          className="button button--remove"
          onClick={() => props.handleClick(item, i)}
        >
          x
        </button>
      </li>

    );
  });
  return (
    <ol>
      {listItems}
    </ol>
  );
}

export default TodoList;