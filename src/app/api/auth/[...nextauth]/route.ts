import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { ENDPOINTS } from "@/service/endpoints";

const API_BASE_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";
const apiUrl = (path: string) => (API_BASE_URL ? new URL(path, API_BASE_URL).toString() : path);

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await fetch(apiUrl(ENDPOINTS.auth.login), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email:    credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            let detail = "";
            try {
              const data = await res.json();
              detail = String((data as any)?.detail ?? (data as any)?.message ?? "");
            } catch {
              // ignore
            }

            // If backend blocks login until email is verified, surface a stable error code
            if (res.status === 403 && /verify|verified|activate|activation/i.test(detail)) {
              throw new Error("unverified");
            }

            return null;
          }

          const data = await res.json();

          return {
            id:          String(data.user?.id ?? ""),
            email:       data.user?.email,
            name:        data.user?.name,
            image:       data.user?.image ?? null,
            accessToken: data.access,
            refreshToken: data.refresh,
          };
        } catch (err) {
          if (err instanceof Error && err.message === "unverified") throw err;
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await fetch(apiUrl(ENDPOINTS.auth.googleSync), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email:        user.email,
              name:         user.name,
              image:        user.image,
              access_token: account.id_token,
            }),
          });

          if (!res.ok) return false;

          const data = await res.json();
          (user as any).accessToken  = data.access_token;
          (user as any).refreshToken = data.refresh_token ?? null;
          return true;
        } catch (err) {
          console.error("[NextAuth] Google sync failed:", err);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken  = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
        token.id           = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      (session as any).accessToken  = token.accessToken;
      (session as any).refreshToken = token.refreshToken;
      (session as any).userId       = token.id;
      return session;
    },
  },

  pages: {
    signIn:  "/login",
    error:   "/login",
  },

  session: { strategy: "jwt" },
  secret:  process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
