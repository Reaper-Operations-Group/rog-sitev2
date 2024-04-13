"use server"
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { internalURLs } from "@/util/constants";
import { authenticateSession } from "@/util/session-management";
import AdminPage from "@/components/Pages/AdminPage/AdminPage";
import { deleteUserByID, getAllUsers } from "@/util/db/users";
import { redirect } from "next/navigation";

async function deleteUser (id: string) {
    "use server";
    await deleteUserByID(id);
    redirect(internalURLs.admin);
}

export default async function(){
    const session = await getServerSession(getAuthOptions());
    authenticateSession(session, internalURLs.admin);

    const users = await getAllUsers();
    return <AdminPage users={users} deleteUser={deleteUser}/>
}