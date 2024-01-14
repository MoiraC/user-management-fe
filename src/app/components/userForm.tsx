import { TextField, Button, Input, MenuItem, Select, InputLabel, RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material";
import { User } from "../types/types";
import { redirect, useRouter } from "next/navigation";
import { GoBack } from "./goBack";

// TODO: make the form a component and use 2 different page for edit and create pages (component may get id to handle the status of process)
// TODO: fetch user data with id or sent user data to this page when navigating from home
export default async function UserForm({
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

    // Fill user data if id provided
    if(id)
    {
        const response = await fetch(`http://localhost:8080/users/${id}`, {
            method: "GET",  
            cache: 'no-store' 
        });

        if(response.ok)
            userData = (await response.json()).data as User;
        else 
            redirect("/")
    }
        
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
                required
                size="small" 
                />
            <TextField 
                name="surname"   
                label="User surname"    
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.surname}
                fullWidth 
                required
                size="small" 
                />
            <TextField 
                name="email"     
                label="User email"      
                variant="filled"
                disabled={disabled} 
                defaultValue={userData.email}
                fullWidth 
                required
                size="small"
                 />
                 
            <FormControl variant="filled"  >
                 <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    name="gender"
                    labelId="demo-simple-select-label"
                    disabled={disabled} 
                    label={"tes"}
                    variant="filled"
                    defaultValue={userData.gender}
                    displayEmpty
                    required
                >
                    <MenuItem disabled value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"unspecified"}>I prefer not to say</MenuItem>
                </Select>
            </FormControl>
      

            <Button variant="contained"
                color="primary"
                type="submit">{buttonText}</Button>
            <GoBack></GoBack>
        </form>
    )
}
