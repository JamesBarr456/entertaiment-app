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

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <Card className="flex w-[350px] flex-col gap-6 border-none bg-main-blue-dark">
        <CardHeader>
          <CardTitle className="text-4xl font-normal text-white">
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
                className={`border-b border-b-gray-500 bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="text-sm text-main-red">Can't be empty</span>
              )}

              <Input
                {...register("password", { required: true })}
                type="password"
                name="password"
                placeholder="Password"
                className={`border-b border-b-gray-500 bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="text-sm text-main-red">Can't be empty</span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button
            type="submit"
            className="w-full bg-main-red text-white hover:bg-white hover:text-black"
          >
            Login yo your account
          </Button>
          <p className="text-white">
            Don't have an account?
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
