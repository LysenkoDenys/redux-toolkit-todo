import React from 'react';

const InputField = (props) => {
  return (
    <>
      <label htmlFor="inputTodo">todo</label>
      <input
        type="text"
        className="text-black p-1 m-1 rounded-md"
        id="inputTodo"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button
        onClick={props.addTodo}
        className="bg-slate-400 p-1 m-1 rounded-md shadow-md hover:shadow-lg hover:bg-slate-500"
      >
        Add Todo
      </button>
    </>
  );
};

export default InputField;
