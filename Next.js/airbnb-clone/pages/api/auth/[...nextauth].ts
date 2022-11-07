import NextAuth, { Account, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch(
            process.env.SERVER_ADDRESS + "/api/account/signin",
            {
              method: "post",
              body: JSON.stringify(credentials),
              headers: { "Content-type": "application/json" },
            }
          );
          const data = await response.json();
          console.log("authorize : ", data);
          if (data) {
            return data.result;
          } else {
            return null;
          }
        } catch (e) {
          console.log("SERVER - AUTHORIZE");
          console.log(e);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!
    })
  ],
};
export default NextAuth(authOptions);
