"use client";
import { auth } from "@/app/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import logo from "../assets/Movie.png";
import Image from "next/image";
import Input from "./Input/Input";
import Button from "./Button/Button";

const LoginInp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [loginError, setLoginError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      if (res) {
        setEmail("");
        setPassword("");
        router.push("/pages/profile");
      } else {
        setLoginError("incorrect password or email address");
      }
    } catch (error) {
      console.log("error", error);
      setLoginError("Incorrect email or password. Please try again.");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[455px] sm:w-[400px] ${
        loginError ? "h-auto sm:h-[450px]" : "h-auto sm:h-[430px]"
      } bg-[#161D2F] rounded-[20px]`}
    >
      <Image
        width={30}
        height={30}
        className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={logo.src}
        alt={""}
      />
      <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
        Login
      </h1>
      <div className="grid items-center gap-5 w-full font-outfit px-8 pb-8">
        <Input
          onKeyDown={handleKeyDown}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          className="py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5 w-full"
          type="email"
          placeholder="Email address"
          value={email}
        />
        <Input
          onKeyDown={handleKeyDown}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
          className="py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5 w-full"
          type="password"
          placeholder="Password..."
        />
        <Button
          onClick={handleLogin}
          className="bg-[#FC4747] rounded-md text-white px-5 py-3 mt-5 w-full"
        >
          Login to your account
        </Button>
        {loginError && (
          <p className="flex justify-center text-red-500">{loginError}</p>
        )}
        <div className="flex text-white justify-center mt-3">
          <div className="flex gap-2">
            <p className="text-sm">Don’t have an account?</p>
            <Link href="/pages/Sign-Up">
              <p className="text-[#FC4747] text-sm">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInp;
