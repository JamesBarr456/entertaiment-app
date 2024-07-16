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

export default function SignUpPage() {
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
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <Input
                {...register("email", {
                  required: { value: true, message: "Can't be empty" },
                })}
                id="email"
                placeholder="Email addres"
                className={`border-b border-b-gray-500 bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="text-sm text-main-red">Can't be empty</span>
              )}
              <Input
                {...register("password", {
                  required: { value: true, message: "Can't be empty" },
                })}
                type="password"
                id="password"
                placeholder="Password"
                className={`border-b border-b-gray-500 bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="text-sm text-main-red">Can't be empty</span>
              )}
              <Input
                {...register("rptpassword", {
                  required: { value: true, message: "Can't be empty" },
                })}
                type="password"
                id="repeat password"
                placeholder="Repeat Password"
                className={`border-b border-b-gray-500 bg-main-blue-dark text-white caret-main-red ${
                  errors.rptpassword ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.rptpassword && (
                <span className="text-sm text-main-red">Can't be empty</span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button className="w-full bg-main-red text-white hover:bg-white hover:text-black">
            Creat on account
          </Button>
          <p className="text-white">
            Alread have an account?
            <Link
              href={"/login"}
              className="mx-2 text-main-red hover:text-white"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
