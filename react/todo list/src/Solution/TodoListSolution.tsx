import styled from "styled-components";
import { HeaderSolution } from "./HeaderSolution.tsx";
import { AddInputSolution } from "./AddInputSolution.tsx";
import { useCallback, useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { v4 as uuid } from "uuid";
import { TodoItemSolution } from "./TodoItemSolution.tsx";

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
});
const TodoListSolution = styled.ul({
    width: "100%",
    listStyle: "none",
});

export interface Todo {
    id: string;
    label: string;
    checked: boolean;
    created_at: string;
    completed_at?: string;
}

const initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
        created_at: new Date().toISOString(),
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
        created_at: new Date().toISOString(),
    },
    {
        id: uuid(),
        label: "Ace CoderPad interview",
        checked: true,
        created_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
    },
];

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem('todos');
        const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
        return parsedTodos.length > 0 ? parsedTodos : initialData;
    });

    const sortTodos = (todos: Todo[]) => {
        const activeTodos = todos
            .filter((todo) => !todo.checked)
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        const completedTodos = todos
            .filter((todo) => todo.checked)
            .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime());

        return [...activeTodos, ...completedTodos];
    };

    // when the todos change, update the local storage with the new todos array
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = useCallback((label: string) => {
        const newTodo = {
            id: uuid(),
            label,
            checked: false,
            created_at: new Date().toISOString(),
        };

        const newTodos = [...todos, newTodo];

        setTodos(sortTodos(newTodos));
    }, [todos]);

    const deleteTodo = useCallback((event: React.MouseEvent, id: string) => {
        event.stopPropagation();
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(sortTodos(newTodos));
    }, [todos]);

    const handleChange = useCallback((id: string, checked: boolean) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked, completed_at: checked ? new Date().toISOString() : undefined };
            } else {
                return todo;
            }
        });

        setTodos(sortTodos(newTodos));
    }, [todos]);

    return (
        <Wrapper>
            <HeaderSolution>Todo List</HeaderSolution>
            <AddInputSolution onAdd={addTodo} />
            <TodoListSolution>
                {todos.map((todo) => (
                    <TodoItemSolution 
                        key={todo.id} 
                        onChange={(checked) => handleChange(todo.id, checked)} 
                        onDelete={(event) => deleteTodo(event, todo.id)}
                        {...todo} 
                    />
                ))}
            </TodoListSolution>
        </Wrapper>
    );
}