import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";

const ProfileDetails = async ({ params }) => {
  const { profileId } = await params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  console.log(profile);
  if (!profile) return <h3>مشکلی رخ داده است</h3>;
  return <ProfileDetailsPage data={profile} />;
};

export default ProfileDetails;
