"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function LoginPage() {
  return (
    <Card className="w-[350px] bg-main-blue-dark border-none  flex flex-col gap-6">
      <CardHeader>
        <CardTitle className="text-white font-normal text-4xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <Input
                id="name"
                placeholder="Email addres"
                className="border-b-gray-500 border-b text-white bg-main-blue-dark caret-main-red   "
              />
              <Input
                id="password"
                placeholder="Password"
                className="border-b-gray-500 border-b bg-main-blue-dark text-white caret-main-red"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <Button className="text-white bg-main-red w-full hover:bg-white hover:text-black">
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
  );
}
