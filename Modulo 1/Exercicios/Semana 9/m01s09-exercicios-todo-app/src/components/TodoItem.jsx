/* eslint-disable react/prop-types */
import useToDos from "../contexts/useToDos";

const TodoItem = ({ todo }) => {
  const todoContext = useToDos();
  const { markTodo } = todoContext;
  return (
    <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
      <label className="form-check-label" htmlFor={`${todo.id}-done-checkbox`}>
        {todo.text}
      </label>
      <input
        onChange={() => markTodo(todo.id)}
        role="button"
        className="form-check-input me-1"
        type="checkbox"
        checked={todo.done}
        id={`${todo.id}-done-checkbox`}
      />
    </li>
  );
};

export default TodoItem;