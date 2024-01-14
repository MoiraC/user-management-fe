import { Button, TextField } from "@mui/material";
import { SubmitButton } from "../components/submitButton";
import { createUser } from "../actions/createUserAction";
import { GoBack } from "../components/goBack";
import UserForm from "../components/userForm";

export default function Page() {
    return (
        <UserForm action={createUser} buttonText="Create User" ></UserForm>
    )
}