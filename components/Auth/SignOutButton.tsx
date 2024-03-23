'use client'
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export default function SignOutButton({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <Button onClick={()=>signOut()}>{children}</Button>
}