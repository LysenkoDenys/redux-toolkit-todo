import React from 'react';

const TodoItem = (todo) => {
  return (
    <li className="flex justify-center items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <span
        className="text-amber-800 cursor-pointer"
        onClick={() => removeTodo(todo.id)}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
