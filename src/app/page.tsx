import SignInButton from "@/components/Auth/SignInButton";
import { internalURLs } from "@/util/constants";
import { Box, Link, Typography, Button, Paper } from "@mui/material";

export default async function Home() {
  return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Paper elevation={1} square={false}>
          <Box
            component="img"
            alt="logo"
            src="/images/ROGLogo.webp"
            height="250px"
            marginBottom="20px"
            paddingTop="10px"
          />

          <Box
            display="flex"
            flexDirection="column"
            gap="20px"
            padding="10px"
          >
            <Typography>
              Welcome to the Reaper Operations Group!
            </Typography>
            <Typography>
              Explore more about us in our <Link href={internalURLs.guest}><Button variant="outlined">Guest Portal</Button></Link>
            </Typography>
            <Typography>
              Interested in joining? <SignInButton>join us through steam.</SignInButton>
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
}
