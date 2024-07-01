import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  return <div className="text-center text-2xl">Hello!</div>;
}

export default App;
