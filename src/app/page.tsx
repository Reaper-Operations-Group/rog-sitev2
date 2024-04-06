
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]/route";
import LandingPage from "@/components/Pages/LandingPage";
import { internalURLs } from "@/util/constants";
import { handleRedirect } from "@/util/redirects";

export default async function Home() {
  const session = await getServerSession(getAuthOptions());
  handleRedirect(session, internalURLs.root);

  return (
      <LandingPage/>
    );
}
