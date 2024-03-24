'use client'
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function SignInButton({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <Button
              onClick={()=>signIn()}
              variant="outlined"
            >
              {children}
            </Button>
}