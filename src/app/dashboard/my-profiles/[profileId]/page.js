import AddProfilePage from "@/components/templates/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const Edit = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی رخ داده است. لطفا مجدد تلاش کنید</h3>;

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default Edit;
