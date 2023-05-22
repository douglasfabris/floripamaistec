import { useContext } from "react";
import { todoContext } from "./ToDoProvider";

const useToDos = () => {
  const context = useContext(todoContext);
  return context;
};

export default useToDos