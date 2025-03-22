import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import LandingPage from "./landingpage";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return <LandingPage />;
}
