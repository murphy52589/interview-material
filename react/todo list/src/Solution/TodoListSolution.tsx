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

    //this exists because otherwise, the first use effect will trigger the second, overwriting any data from the local storage with initial data
    const [isInitialized, setIsInitialized] = useState(false);

    const sortTodos = (todos: Todo[]) => {
        return todos.sort((a: Todo, b: Todo) => {
            if (a.checked === b.checked) {
                //elements are equal, so no change in order
                return 0;
            } else if (a.checked) {
                //a is checked, so it should be after b
                return 1;
            } else {
                //a is unchecked, so it should be before b
                return -1;
            }
        });
    };

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        setIsInitialized(true);
    }, []);

    // when the todos change, update the local storage with the new todos array
    // if isInitialized is false, do not update the local storage. Once isInitialized has changed (first use effect), the second use effect will trigger
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('todos', JSON.stringify(sortTodos(todos)));
        }
    }, [todos, isInitialized]);

    const addTodo = useCallback((label: string) => {
        const newTodo = {
            id: uuid(),
            label,
            checked: false
        };
    
        const newTodos = [...todos, newTodo];
    
        setTodos(sortTodos(newTodos));
    }, []);

    // It maps through the previous todos array and if the todo id matches the id passed in, it updates the checked property, otherwise it returns the todo as is
    const handleChange = useCallback((id: string, checked: boolean) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked };
            } else {
                return todo;
            }
        });
    
        setTodos(sortTodos(newTodos));
    }, [todos]);

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
