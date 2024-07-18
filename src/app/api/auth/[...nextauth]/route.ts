import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      //authorize( actualmente tira un error y no quiero desactiar el modo stricto de TS El motivo es que NextAuth.js se desarrolló con, "strict": false pero actualmente están trabajando para que sea compatible con strict establecido en true.)
      async authorize(credentials: Credentials): Promise<User> {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) {
          throw new Error("Invalid email");
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) {
          throw new Error("Invalid password");
        }

        return {
          id: userFound.id,
          email: userFound.email,
        };
      },
    }),
    // Agrega más proveedores si es necesario
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
