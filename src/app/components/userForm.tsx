import { TextField, Button } from "@mui/material";
import { User } from "../types/types";

// TODO: make the form a component and use 2 different page for edit and create pages (component may get id to handle the status of process)
// TODO: fetch user data with id or sent user data to this page when navigating from home
export default function UserForm({
    id,
    action,
    buttonText,
    disabled
}: {
    id?: number
    action: ((formData: FormData) => void),
    buttonText: string
    disabled?: boolean
}) {

    let userData = {} as User;
    if(id)
      // TODO: Fetch user data with id
        
    return (
        <form action={action} className="user-form">
            {/* we are using id here only for user experience, user id already binded on the server side (with updateUser.bind) to prevent client side errors */}
            {id && <TextField name="id" disabled label="ID" value={id} variant="filled" fullWidth size="small" />}
            <TextField 
                name="name"      
                label="User Name"       
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.name}
                fullWidth 
                size="small" 
                />
            <TextField 
                name="surname"   
                label="User surname"    
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.surname}
                fullWidth 
                size="small" 
                />
            <TextField 
                name="email"     
                label="User email"      
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.email}
                fullWidth 
                size="small"
                 />
            <TextField 
                name="birthday"  
                label="User birthday"   
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.birthday}
                fullWidth 
                size="small" 
                />

            <Button variant="contained"
                color="primary"
                type="submit">{buttonText}</Button>
        </form>
    )
}
