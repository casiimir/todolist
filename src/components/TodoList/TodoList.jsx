import { useState } from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const TodoList = ({ list, setList }) => {
  const [todoInput, setTodoInput] = useState('');

  const onHandleClick = () => {
    // 2nd livello di com. 
    // Cambiamo il valore dello stato del padre `App` tramite `setList`
    setList([...list, { id: list.length + 1, text: todoInput}])
    setTodoInput('');
  }

  return (
    <div className="TodoList">
      {/* Primo livello di com.
          Padre => Figlio (tramite props) */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Inserisci una todo"
        />
      <button onClick={onHandleClick}>Aggiungi</button>
      {
        list.length
        ? list.map(todo => <TodoItem todo={todo} key={todo.id}/>)
        : <p>Loading ...</p>
      }
    </div>
  )
}

export default TodoList;