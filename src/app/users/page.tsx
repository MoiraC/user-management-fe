import { Button, TextField } from "@mui/material";
import { SubmitButton } from "../components/submitButton";
import { createUser } from "../actions/createUserAction";

export default function Page() {
    return (
        <form action={createUser} className="user-form">
            <TextField 
                name="name"      
                label="User Name"       
                variant="filled" 
                fullWidth 
                size="small" 
                required
                />
            <TextField 
                name="surname"   
                label="User surname"    
                variant="filled" 
                fullWidth 
                size="small" 
                required
                />
            <TextField 
                name="email"     
                label="User email"      
                variant="filled" 
                fullWidth 
                size="small"
                required
                />
            <TextField 
                name="birthday"  
                label="User birthday"   
                variant="filled" 
                fullWidth 
                size="small" 
                required
                />
            <SubmitButton></SubmitButton>
    </form>
    )
}