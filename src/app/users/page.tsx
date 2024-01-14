import { createUser } from "../actions/createUserAction";
import UserForm from "../components/userForm";

export default function Page() {
    return (
        <UserForm action={createUser} buttonText="Create User" ></UserForm>
    )
}