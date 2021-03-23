import React, { useState } from "react";
import Form from "./Form";
import ListOfTodos from "./ListOfTodos";
import styled from "styled-components";

const H1 = styled.h1`
  color: purple;
  text-align: center;
`;

export type Todo = {name:string, date:{day:string, month:string, year:string}}
export const TodosContext = React.createContext({} as {todos:Todo[], completeTodo: ((name:string)=>void), handleSubmit:((todo:Todo)=>void)});

const App = () => {
   
  const [todos, setTodos] = useState([] as Todo[]);

  function completeTodo(name: string) {
    todos.length && setTodos((prevTodos) => prevTodos.filter((todo) => todo.name !== name));
  }

  function handleSubmit(todo:Todo): void {
    setTodos((prevTodos) => [...prevTodos, todo]);
    
  }
  return (
    <div>
      <H1>Todo List</H1>
      <TodosContext.Provider value = {{todos, completeTodo, handleSubmit}}>
      <Form />
      <ListOfTodos />
      </TodosContext.Provider>
    </div>
  );
};
export default App;
