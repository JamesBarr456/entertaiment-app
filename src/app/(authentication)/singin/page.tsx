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

export default function SignUpPage() {
  return (
    <Card className="w-[350px] bg-main-blue-dark border-none  flex flex-col gap-6">
      <CardHeader>
        <CardTitle className="text-white font-normal text-4xl">
          Sign Up
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <Input
                id="email"
                placeholder="Email addres"
                className="border-b-gray-500 border-b text-white bg-main-blue-dark caret-main-red   "
              />
              <Input
                id="password"
                placeholder="Password"
                className="border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red"
              />
              <Input
                id="repeat password"
                placeholder="Repeat Password"
                className="border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red"
              />
            </div>
          </div>
        </form>
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
  );
}
