import styled from "styled-components";
import { useContext } from "react";
import { TodosContext } from "./App";

const TodosDiv = styled.table`
  margin: 30px auto;
  border-collapse: collapse;
  border: 2px solid blue;
`;

const Td = styled.td`
  border: 1px solid blue;
  padding: 5px;
`;

const Thead = styled.thead`
  background: lightblue;
  font-weight: bold;
  border: 2px solid blue;
`;

const Checkbox = styled.input`
  margin: auto;
`;

const ListOfTodos = () => {
  const todos = useContext(TodosContext).todos;
  const onChange = useContext(TodosContext).completeTodo;
  return (
    <TodosDiv>
      {todos.length ? (
        <Thead>
          <tr>
            <Td>Task</Td>
            <Td>Date</Td>
            <Td>Completed</Td>
          </tr>
        </Thead>
      ) : null}
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <Td>{todo.name}</Td>
            <Td>{`${todo.date.day}/${todo.date.month}/${todo.date.year}`}</Td>
            <Td>
              <Checkbox
                type="checkbox"
                onChange={() => onChange(todo.name)}
              ></Checkbox>
            </Td>
          </tr>
        ))}
      </tbody>
    </TodosDiv>
  );
};

export default ListOfTodos;
