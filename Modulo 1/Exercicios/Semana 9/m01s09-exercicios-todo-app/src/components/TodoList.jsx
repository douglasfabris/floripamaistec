import useToDos from "../contexts/useToDos";
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({ name }) => {
  const todoContext = useToDos();
  const { completedToDos, pendingToDos } = todoContext;
  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {name === "Finalizados"
          ? completedToDos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : pendingToDos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}
      </ul>
    </section>
  );
};

export default TodoList;