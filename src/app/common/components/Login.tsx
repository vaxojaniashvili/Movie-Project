"use client";
import { auth } from "@/app/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginInp = () => {
  const router = useRouter();
  const [user, setUser] = useAuthState(auth);
  const [emailValue, setEmailValue] = useState("");
  const handleLogin = () => {
    try {
      {
        auth.currentUser?.email === emailValue && router.push("/pages/profile");
      }
    } catch (error) {}
  };
  console.log(auth.currentUser?.email);
  return (
    <div>
      <div className="grid justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5">
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          className="border border-black"
          type="email"
          placeholder="Email..."
          value={emailValue}
        />
        <input
          className="border border-black"
          type="password"
          placeholder="Password..."
        />
        <button className="bg-gray-500 rounded text-white px-5">Log-in</button>
        <Link href="/">
          <div
            onClick={handleLogin}
            className="flex bg-blue-500 rounded text-white px-5 justify-center"
          >
            <button>Create a account</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginInp;
