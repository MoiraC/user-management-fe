'use server'
import { redirect } from "next/navigation";
import { User } from "../types/types";

export async function createUser(formData: FormData) {
    try {
        const user = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            gender: formData.get('gender'),
        } as User
        
        const response = await fetch("http://localhost:8080/users/create", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
            cache: 'no-store' 
          });

        if(response.ok)
            console.log(`user created`);
        else 
            console.log('user creation failed')


    } catch (error) {
        console.log(error)        
    }

    return redirect("/")
}