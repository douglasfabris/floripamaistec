import TodoList from "../components/TodoList";
import Formulario from "../components/Formulario";
import { ToDoProvider } from "../contexts/ToDoProvider";

const Home = () => (
    <ToDoProvider>
        <div className="row">
          <Formulario />
        </div>
        <div className="row">
          <TodoList name="A fazer" />
          <TodoList name="Finalizados" />
        </div>
    </ToDoProvider>
);

export default Home