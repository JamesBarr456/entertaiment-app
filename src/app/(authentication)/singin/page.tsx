"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface DatosFormularioRegistro {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DatosFormularioRegistro>();

  const router = useRouter();

  const password = watch("password");

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      console.log("Error el Email ya existe");
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Card className="w-[350px] md:w-[400px] md:p-2 font-outfit  text-white bg-main-blue-dark border-none rounded-2xl flex flex-col gap-6">
        <CardHeader>
          <CardTitle className=" font-light text-3xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6">
            {/* Aqui empieza el input de email */}
            <div className="relative">
              <Input
                {...register("email", {
                  required: "Can't be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email",
                  },
                })}
                id="email"
                placeholder="Email addres"
                autoComplete="nope"
                className={`border-b-gray-500 border-b bg-main-blue-dark  caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="absolute top-0.5 right-0 text-main-red text-sm ">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Aqui termina el input de email */}

            {/* Aqui empieza el input de la contraseña */}
            <div className="relative">
              <Input
                {...register("password", {
                  required: "Can't be empty",
                  minLength: {
                    value: 8,
                    message: "The password must be at least 8 characters long.",
                  },
                })}
                type="password"
                id="password"
                placeholder="Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark  caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="absolute top-0 right-0 w-3/4 text-end text-main-red text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Aqui termina el input de la contraseña
             */}

            {/* Aqui empieza el input del confirmPassword */}
            <div className="relative">
              <Input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Can't be empty",
                  },
                  validate: (value) =>
                    value === password || "The passwords don't match",
                })}
                type="password"
                id="confirmPassword"
                placeholder="Repeat Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark  caret-main-red ${
                  errors.confirmPassword
                    ? "border-b-main-red"
                    : "border-b-gray-500"
                }`}
              />
              {errors.confirmPassword && (
                <span className="absolute top-0.5 right-0 text-main-red text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Aqui termina el input del confirmPassword */}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button className="font-light bg-main-red w-full  hover:bg-white hover:text-black">
            Creat on account
          </Button>
          <p className="font-light">
            Already have an account?
            <Link
              href={"/login"}
              className="text-main-red  hover:text-white mx-2"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
