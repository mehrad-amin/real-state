import SigninPage from "@/components/templates/SigninPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async (context) => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SigninPage />;
};

export default page;
