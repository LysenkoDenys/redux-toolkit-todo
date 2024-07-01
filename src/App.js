import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: text,
          completed: false,
        },
      ]);
    }
    setText('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    return setTodos(
      todos.map((todo) =>
        todo.id !== todoId ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };

  return (
    <div className="text-center text-2xl">
      <label htmlFor="inputTodo">text todo</label>
      <input
        type="text"
        className="text-black p-1 m-1 rounded-md"
        id="inputTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={addTodo}
        className="bg-slate-400 p-1 m-1 rounded-md shadow-md hover:shadow-lg hover:bg-slate-500"
      >
        Add Todo
      </button>
      <TodoList />
    </div>
  );
}

export default App;
