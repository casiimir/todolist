import './index.css';

// Questo è il figlio che riceve `todo` dal padre come prop
const TodoItem = ({ todo }) => {
  return (
    <div className="TodoItem">
      <h3>{ todo.text }</h3>
    </div>
  )
}

export default TodoItem;