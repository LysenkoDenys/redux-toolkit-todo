import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text: text }));
    setText('');
  };

  return (
    <div className="text-center text-2xl">
      <InputField addTodo={addTask} text={text} setText={setText} />
      <TodoList />
    </div>
  );
}

export default App;
