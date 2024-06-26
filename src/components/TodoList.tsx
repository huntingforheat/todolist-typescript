import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { BooleanLiteral } from "typescript";
import { useTodoState } from "../TodoContext";
// import { u} from "../TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

function TodoList() {

    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map((todo: Todo) =>  (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text} 
                    done={todo.done} 
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
