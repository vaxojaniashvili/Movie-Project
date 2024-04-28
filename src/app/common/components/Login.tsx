"use client";
import { auth } from "@/app/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import logo from "../assets/Movie.png";

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

  return (
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] ${loginError && "h-[450px]"} h-[430px] bg-[#161D2F] rounded-[20px]`}>
      <img className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"src={logo.src} />
      <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
        Login
      </h1>
      <div className="grid items-center gap-5 w-full font-outfit">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type="email"
          placeholder="Email address"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type="password"
          placeholder="Password..."
        />
        <button
          onClick={handleLogin}
          className="bg-[#FC4747] rounded-md text-white px-5 mx-8 py-3 mt-5"
        >
          Login to your account
        </button>
        {loginError && <p className="flex justify-center text-red-500">{loginError}</p>}
        <div className="flex text-white px-5 justify-center mx-8 mt-3">
          <div className="flex gap-2">
            <p>Don’t have an account?</p>
            <Link href="/pages/Sign-Up">
              <p className="text-[#FC4747]">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInp;
