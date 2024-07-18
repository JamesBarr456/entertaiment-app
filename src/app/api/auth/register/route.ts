import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();

    const userEmailFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // Pregunto si el email ya fue registrado
    if (userEmailFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    //Aca le estoy mandando los datos de formulario register a la base de datos
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });
    //El password no lo necesita el cliente
    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
