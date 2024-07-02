import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

const TodoItem = (todo) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-center items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoComplete({ id: todo.id }))}
      />
      <span>{todo.text}</span>
      <span
        className="text-amber-500 cursor-pointer"
        onClick={() => dispatch(removeTodo({ id: todo.id }))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
