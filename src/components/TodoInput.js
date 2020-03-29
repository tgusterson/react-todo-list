import React from 'react';
const TodoInput = (props) => (
  <form
    className="input-form"
    onSubmit={props.handleSubmit}
  >
    <input
      className="input-form__text-input"
      type="text"
      onKeyPress={props.handleKeyPress}
    />
    <button className="button" >Add</button>
  </form>
);
export default TodoInput;