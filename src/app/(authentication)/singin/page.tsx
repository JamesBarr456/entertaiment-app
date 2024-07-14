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
                  required: { value: true, message: "Can't be empty" },
                })}
                id="email"
                placeholder="Email addres"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.email && (
                <span className="text-main-red text-sm">Can't be empty</span>
              )}
              <Input
                {...register("password", {
                  required: { value: true, message: "Can't be empty" },
                })}
                type="password"
                id="password"
                placeholder="Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.password ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.password && (
                <span className="text-main-red text-sm">Can't be empty</span>
              )}
              <Input
                {...register("rptpassword", {
                  required: { value: true, message: "Can't be empty" },
                })}
                type="password"
                id="repeat password"
                placeholder="Repeat Password"
                className={`border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red ${
                  errors.rptpassword ? "border-b-main-red" : "border-b-gray-500"
                }`}
              />
              {errors.rptpassword && (
                <span className="text-main-red text-sm">Can't be empty</span>
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
