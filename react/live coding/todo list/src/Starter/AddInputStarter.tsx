import styled from "styled-components";
import {FC} from "react";

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

}

export const AddInputStarter: FC<AddInputProps> = () => {
    return (
        <Form>
            <Input placeholder="Add a task" />
        </Form>
    );
}
