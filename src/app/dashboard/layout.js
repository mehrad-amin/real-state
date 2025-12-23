import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی رخ داده است</h3>;
  return (
    <div>
      <DashboardSidebar role={user.role} email={user.email}>
        {children}
      </DashboardSidebar>
    </div>
  );
};

export default DashboardLayout;
