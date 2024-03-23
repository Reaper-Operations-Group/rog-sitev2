import { Button, ButtonGroup, Typography } from "@mui/material";
import SignInButton from "../../components/Auth/SignInButton";
import SignOutButton from "../../components/Auth/SignOutButton";

export default async function Home() {
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
