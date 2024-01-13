'use server'
import { redirect } from "next/navigation";
import { User } from "../types/types";

export async function createUser(formData: FormData) {
    try {
        const user = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            birthday: formData.get('birthday'),
        } as User
        
        const response = await fetch("http://localhost:8080/users/create", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
            cache: 'no-store' 
          });

    } catch (error) {
        console.log(error)        
    }

    return redirect("/")
}