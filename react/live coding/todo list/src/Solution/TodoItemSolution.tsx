import styled from "styled-components";
import { FC } from "react";

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

// based on if the todo item is checked, the label will have a line-through style
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

const DeleteButton = styled.button({
    marginLeft: "auto",
    border: "none",
    background: "none",
    color: "red",
    cursor: "pointer",
    fontSize: 14,
});

export interface TodoItemProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    onDelete: (event: React.MouseEvent, id: string) => void;
}

export const TodoItemSolution: FC<TodoItemProps> = ({
    id,
    label,
    checked = false,
    onChange,
    onDelete,
}) => {

    return (
        <Wrapper>
            <Checkbox
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <Label checked={checked}>{label}</Label>
            <DeleteButton onClick={(e => onDelete(e, id))}>Delete</DeleteButton>
        </Wrapper>
    );
};
