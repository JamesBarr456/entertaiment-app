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

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      alert(res.error);
    } else {
      console.log("enviando a homepage");
      router.push("/bookmarked");
      router.refresh();
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Card className="w-[350px] bg-main-blue-dark border-none  flex flex-col gap-6">
        <CardHeader>
          <CardTitle className="text-white font-normal text-4xl">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <Input
                {...register("email", { required: true })}
                name="email"
                placeholder="Email addres"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="text-main-red text-sm">Can't be empty</span>
              )}

              <Input
                {...register("password", { required: true })}
                type="password"
                name="password"
                placeholder="Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="text-main-red text-sm">Can't be empty</span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button
            type="submit"
            className="text-white bg-main-red w-full hover:bg-white hover:text-black"
          >
            Login yo your account
          </Button>
          <p className="text-white">
            Don't have an account?
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
