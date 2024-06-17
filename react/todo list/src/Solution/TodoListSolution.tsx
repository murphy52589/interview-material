import styled from "styled-components";
import { HeaderSolution } from "./HeaderSolution.tsx";
import { AddInputSolution } from "./AddInputSolution.tsx";
import { useEffect, useState } from "react";
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
}

const initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
    },
    {
        id: uuid(),
        label: "Ace CoderPad interview",
        checked: true,
    },
];

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(initialData);

    // sorts the todos array by checked property. 1 represents checked, -1 represents unchecked
    const sortTodos = (todos: Todo[]) => {
        return todos.sort((a: Todo, b: Todo) => (a.checked === b.checked ? 0 : a.checked ? 1 : -1));
    };

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // when the todos change, update the local storage with the new todos array
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(sortTodos(todos)));
    }, [todos]);


    // setTodos is performing a functional update. It copies the previous todos array and appends a new todo to it
    const addTodo = (label: string) => {
        setTodos(prevTodos => sortTodos([...prevTodos, {
            id: uuid(),
            label,
            checked: false
        }]));
    };

    // handleChange is performing a functional update. 
    // It maps through the previous todos array and if the todo id matches the id passed in, it updates the checked property, otherwise it returns the todo as is
    const handleChange = (id: string, checked: boolean) => {
        setTodos(prev => sortTodos(prev.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked };
            } else {
                return todo;
            }
        })));
    };

    // maps through the todos array and returns a TodoItemSolution component for each todo
    // note that if the props are the same as the object key, you can use the spread operator to pass the object as props
    return (
        <Wrapper>
            <HeaderSolution>Todo List</HeaderSolution>
            <AddInputSolution onAdd={addTodo} />
            <TodoListSolution>
                {todos.map((todo) => (
                    <TodoItemSolution key={todo.id} {...todo} onChange={(checked) => handleChange(todo.id, checked)} />
                ))}
            </TodoListSolution>
        </Wrapper>
    );
}
