
import { getServerSession } from "next-auth";
import LandingPage from "@/components/Pages/LandingPage";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { authenticateSession } from "@/util/session-management";
import { internalURLs } from "@/util/constants";

/**
 * Home Page
 * Roles - Only accessibly to unauthenticated users
 */
export default async function Home() {
  const session = await getServerSession(getAuthOptions());
  authenticateSession(session, internalURLs.root);

  return (
    <LandingPage />
  );
}
