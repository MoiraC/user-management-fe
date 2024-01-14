import UserForm from "@/app/components/userForm";
import { redirect } from "next/navigation";

async function deleteUser(userId: number) {
    'use server'

    const response = await fetch(`http://localhost:8080/users/delete/${userId}`, {
        method: "DELETE", 
        cache: 'no-store' 
      });
    
    if(response.ok)
        console.log(`user deleted with id ${userId}`);
    else 
        console.log('user deletion failed')

    redirect("/")
}

export default function Page({
    params: { id },
}: {
    params: { id: number }
}) {
    const deleteUserWithId = deleteUser.bind(null, id)

    return (
        <UserForm id={id} action={deleteUserWithId} buttonText="Delete User" disabled />
    )
}