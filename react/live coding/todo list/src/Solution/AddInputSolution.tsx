import styled from "styled-components";
import { FC, useState } from "react";

const Form = styled.form({
    width: "100%",
});

const Input = styled.input({
    width: "100%",
    border: "none",
    padding: 16,
    outline: "none",
    borderRadius: 3,
    marginBottom: 8,
});

interface AddInputProps {
    onAdd: (label: string) => void;
}

export const AddInputSolution: FC<AddInputProps> = ({ onAdd }) => {
    const [input, setInput] = useState("");

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        // used to prevent the default action of an event from happening
        // in this case, it prevents the form from submitting and refreshing the page
        e.preventDefault();
        onAdd(input);
        setInput("");
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Add a new todo item here"
            />
        </Form>
    );
}
