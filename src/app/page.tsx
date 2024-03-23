import { Button, ButtonGroup, Typography } from "@mui/material";
import SignInButton from "../../components/Auth/SignInButton";
import { getServerSession } from "next-auth";
import SignOutButton from "../../components/Auth/SignOutButton";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  
  return (
      <>
        <Typography variant="h1">
          Home
        </Typography>

        <ButtonGroup>
          <Button>Visitor</Button>
          <SignInButton>ROG Contractor</SignInButton>
          <SignOutButton>Sign Out</SignOutButton>
        </ButtonGroup>
      </>
    );
}
