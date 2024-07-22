"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface DatosFormularioRegistro {
  email: string;
  password: string;
}
export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DatosFormularioRegistro>();

  const onSubmit = handleSubmit(async (data) => {
    reset();
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/home");
      router.refresh();
    } else if (res?.error) {
      setError(res.error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Card className="w-[350px] text-white md:p-2 md:w-[400px] font-outfit bg-main-blue-dark border-none rounded-2xl flex flex-col gap-6">
        <CardHeader>
          <CardTitle className=" font-light text-3xl ">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6">
            {/* Aqui empieza el input de email */}
            <div className="relative">
              <Input
                {...register("email", { required: "Can't be empty" })}
                name="email"
                placeholder="Email addres"
                className={`border-b-gray-500 border-b bg-main-blue-dark caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
                autoComplete="off"
              />
              {errors.email || error === "Invalid email" ? (
                <span className="absolute top-0.5 right-0 text-main-red text-sm">
                  {errors.email ? errors.email.message : error}
                </span>
              ) : (
                ""
              )}
            </div>

            {/* Termina el input de email */}

            {/* Aqui empieza el input de la contraseña */}
            <div className="relative">
              <Input
                {...register("password", { required: "Can't be empty" })}
                type="password"
                name="password"
                placeholder="Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark  caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password || error === "Invalid password" ? (
                <span className="absolute top-0.5 right-0 text-main-red text-sm">
                  {errors.password ? errors.password.message : error}
                </span>
              ) : (
                ""
              )}
            </div>

            {/* Aqui termina el input de la contraseña */}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button
            type="submit"
            className=" py-4 font-light  bg-main-red w-full hover:bg-white hover:text-black"
          >
            Login your account
          </Button>
          <p className="font-light">
            Don&#39;t have an account?
            <Link
              href={"/singin"}
              className="text-main-red  mx-2 hover:text-white"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
