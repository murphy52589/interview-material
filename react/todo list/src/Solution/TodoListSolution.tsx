import styled from "styled-components";
import {HeaderStarter} from "./HeaderStarter.tsx";
import {AddInputStarter} from "./AddInputStarter.tsx";

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
});

export const TodoListStarter = styled.ul({
    width: "100%",
    listStyle: "none",
});

export interface TodoListProps {
    id: string;
    label: string;
    checked: boolean;
}

export const TodoList = () => {
    return (
        <Wrapper>
            <HeaderStarter />
            <AddInputStarter />
            <TodoListStarter>
                
            </TodoListStarter>
        </Wrapper>
    );
}
