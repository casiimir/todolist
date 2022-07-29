import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: 'Components'
    },
    {
      id: 2,
      text: 'useState'
    }
  ]);

  return (
    <div className="App">
      <h1>Todolist</h1>
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
