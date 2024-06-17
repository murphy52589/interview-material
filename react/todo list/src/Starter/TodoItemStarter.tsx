import styled from "styled-components";
import {FC, useState} from "react";

export const Wrapper = styled.label({
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 4,
    marginBottom: 8,
    padding: 16,
    background: "white",
    fontWeight: "400",
    fontSize: 14,
    cursor: "pointer",
});

const Label = styled.span<{ checked: boolean }>(({ checked }) => ({
    textDecoration: checked ? "line-through" : "none",
    fontSize: 20,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
}));

const Checkbox = styled.input({
    width: 16,
    height: 16,
    marginRight: 12,
});

export interface TodoItemProps {

}

export const TodoItem: FC<TodoItemProps> = ({  }) => {

    return (
        <Wrapper>
            <Checkbox
                type="checkbox"
                checked={checked}
            />
            <Label checked={checked}>{ label }</Label>
        </Wrapper>
    );
}
