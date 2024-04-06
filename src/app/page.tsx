
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]/route";
import LandingPage from "@/components/Pages/LandingPage";
import { internalURLs } from "@/util/constants";
import { verifySession } from "@/util/session-management";

export default async function Home() {
  const session = await getServerSession(getAuthOptions());
  verifySession(session, internalURLs.root);

  return (
    <LandingPage />
  );
}
