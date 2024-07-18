import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(
        credentials: { email: string; password: string },
        req: NextApiRequest
      ) {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) {
          throw new Error("Usuario no encontrado");
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) {
          throw new Error("Contraseña incorrecta");
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
