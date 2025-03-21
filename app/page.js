import { headers } from "next/headers";
import { auth } from "@/lib/auth";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return (
    <div>
      <h1>Hello world, {session.user.name}</h1>
    </div>
  );
}
