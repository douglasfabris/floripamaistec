/* eslint-disable react/prop-types */
import { createContext, useMemo, useState } from "react";

export const todoContext = createContext();

export const ToDoProvider = ({ children }) => {
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

  const objects = useMemo(() => ({ addToDo, markTodo, completedToDos, pendingToDos }))
  return (
    <todoContext.Provider
      value={objects}
    >
      {children}
    </todoContext.Provider>
  );
};
