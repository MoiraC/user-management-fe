import UserForm from "@/app/components/userForm";
import { User } from "@/app/types/types";
import { redirect } from "next/navigation";

async function updateUser(userId: number, formData: FormData) {
    'use server'

    const user = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        gender: formData.get('gender'),
    } as User

    const response = await fetch(`http://localhost:8080/users/update/${userId}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
        cache: 'no-store' 
    });
      
    if(response.ok)
        console.log(`user updated with id ${userId}`);
    else 
        console.log('user update failed')

    redirect("/")
}

export default function Page({
    params: { id },
}: {
    params: { id: number }
}) {
    const updateUserWithId = updateUser.bind(null, id)

    return (
        <UserForm id={id} action={updateUserWithId} buttonText="Update User"/>
    )
}