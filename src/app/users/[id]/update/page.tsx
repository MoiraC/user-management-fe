import UserForm from "@/app/components/userForm";
import { User } from "@/app/types/types";
import { redirect } from "next/navigation";

async function updateUser(userId: number, formData: FormData) {
    'use server'

    const user = {
        id: userId,
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        birthday: formData.get('birthday'),
    } as User
  
    // create
    console.log(`user updated with`);
    console.log(user);

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