import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سمت سرور رخ داده است");
        }
        if (!email || !password) {
          throw new Error("لطفا اطلاعات را به درستی وارد کنید");
        }
        const user = await User.findOne({ email: email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمزعبور اشتباه است");
        return { id: user._id, email: user.email };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
        };
      }
      return session;
    },
  },
};
const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
