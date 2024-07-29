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
      <Card className="w-[327px] space-y-4 rounded-2xl border-none bg-main-blue-dark text-white md:w-[400px]">
        <CardHeader>
          <CardTitle className="text-3xl font-light">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Aqui empieza el input de email */}
            <div className="relative">
              <Input
                {...register("email", { required: "Can't be empty" })}
                name="email"
                placeholder="Email addres"
                className={`border-b border-b-gray-500 bg-main-blue-dark caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
                autoComplete="off"
              />
              {errors.email || error === "Invalid email" ? (
                <span className="absolute right-0 top-0.5 text-sm text-main-red">
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
                className={`border-b border-b-gray-500 bg-main-blue-dark caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password || error === "Invalid password" ? (
                <span className="absolute right-0 top-0.5 text-sm text-main-red">
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
            className="w-full bg-main-red py-6 text-base font-light hover:bg-white hover:text-black"
          >
            Login your account
          </Button>
          <p className="font-light">
            Don&#39;t have an account?
            <Link
              href={"/singin"}
              className="mx-2 text-main-red hover:text-white"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
