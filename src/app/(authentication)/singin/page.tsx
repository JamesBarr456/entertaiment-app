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
  } = useForm<DatosFormularioRegistro>();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("password do not match");
    }

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
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Card className="w-[350px] bg-main-blue-dark border-none  flex flex-col gap-6">
        <CardHeader>
          <CardTitle className="text-white font-normal text-4xl">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <Input
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email no es válido",
                  },
                })}
                id="email"
                placeholder="Email addres"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="text-main-red text-sm">
                  {errors.email.message}
                </span>
              )}
              <Input
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
                type="password"
                id="password"
                placeholder="Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="text-main-red text-sm">
                  {errors.password.message}
                </span>
              )}
              <Input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirmar el Password es requerido",
                  },
                })}
                type="password"
                id="confirmPassword"
                placeholder="Repeat Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.confirmPassword
                    ? "border-b-main-red"
                    : "border-b-gray-500"
                }`}
              />
              {errors.confirmPassword && (
                <span className="text-main-red text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button className="text-white bg-main-red w-full hover:bg-white hover:text-black">
            Creat on account
          </Button>
          <p className="text-white">
            Alread have an account?
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
