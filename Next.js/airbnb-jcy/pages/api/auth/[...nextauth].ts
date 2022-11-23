import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import DiscordProvider from "next-auth/providers/discord";
import Account from "../../../lib/models/account";
import mongooseInit from "../../../lib/mongooseInit";

mongooseInit();
export const authOptions: NextAuthOptions = {
  pages: {
    error: "/auth/error",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log("credentials - ", JSON.stringify(credentials));
        try {
          const response: any = await fetch(
            process.env.SERVER_ADDRESS + "/api/account/signin",
            {
              method: "post",
              body: JSON.stringify(credentials),
              headers: { "Content-type": "application/json" },
            }
          );
          console.log(response.status);
          const data = await response.json();

          console.log("authorize : ", data);
          if (data) {
            const user = {
              id: data._id,
              email: data.email,
              name: `${data.lastname} ${data.firstname}`,
            };
            return user;
            // return data; // next-auth 에 리턴되는 User 데이터는 토큰에 포함됨.
          } else {
            return null;
          }
        } catch (e) {
          console.log("SERVER - AUTHORIZE");
          console.log(e);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId:
        "869831580431-v2l9gqfqmtr944nl38kvrrld8sd1lu4l.apps.googleusercontent.com",
      clientSecret: "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",
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(account);
      if (account?.provider === "credentials") {
        return true;
      }
      // 이 소셜 계정에 해당하는 정보가 만약 관리중인 데이터라면
      // return true;
      const found = await Account.findOne({ email: user.email });
      if (found) {
        console.log(
          found.provider,
          account?.provider,
          found.provider === account?.provider
        );
        console.log(
          found.providerAccountId,
          account?.providerAccountId,
          found.providerAccountId === account?.providerAccountId
        );
        if (
          found.provider === account?.provider &&
          found.providerAccountId === account?.providerAccountId
        ) {
          return true;
        } else {
          const params = `name=${user.name}&email=${user.email}&provider=${account?.provider}&providerAccountId=${account?.providerAccountId}`;
          return `${process.env.SERVER_ADDRESS}/auth/linking?` + params;
        }
      } else {
        const params = new URLSearchParams();
        params.append("name", user.name!);
        params.append("email", user.email!);
        params.append("provider", account?.provider!);
        params.append("providerAccountId", account?.providerAccountId!);
        // const params = `name=${user.name}&email=${user.email}&provider=${account?.provider}&providerAccountId=${account?.providerAccountId}`;
        console.log(params);
        return `${process.env.SERVER_ADDRESS}/auth/new?` + params.toString();
      }

      // return "http://localhost:3000/auth/error?error=Duplicated&email=salzte";

      //  return "http://localhost:3000/auth/error?error=NotEnough&email=salzte";

      // return true; 인증이 됨.

      // return false; // error=AccessDenied
      // throw new Error("Duplicated");
      // throw new Error("NotEnough");
    },
  },
};

export default NextAuth(authOptions);
