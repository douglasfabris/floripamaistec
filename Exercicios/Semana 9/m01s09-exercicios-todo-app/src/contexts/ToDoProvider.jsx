import { createContext, useState } from "react";
import { useToDos } from "./useToDos";

export const todoContext = createContext();

export const ToDoProvider =  ({ children }) => {

  // const { completedToDos, pendingToDos } = todosContext;
  const [toDos, setToDos] = useState([
    { id: 1, text: "Estudar React", done: false },
    { id: 2, text: "Praticar com um projeto", done: true },
    { id: 3, text: "Divulgar meu resultado no LinkedIn", done: false },
  ]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text,
      done: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const markTodo = (id) => {
    const newToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const completedToDos = toDos.filter((todo) => todo.done);
  const pendingToDos = toDos.filter((todo) => !todo.done);

  return (
    <todoContext.Provider value={{ addToDo, markTodo, completedToDos, pendingToDos }}>
      { children }
    </todoContext.Provider>
  )
};