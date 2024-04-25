"use client";
import { auth } from "@/app/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const LoginInp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push("/pages/profile");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div className="grid justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black"
          type="email"
          placeholder="Email..."
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black"
          type="password"
          placeholder="Password..."
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 rounded text-white px-5"
        >
          Log-in
        </button>
        <Link href="/pages/Sign-Up">
          <div className="flex bg-blue-500 rounded text-white px-5 justify-center">
            <button>Create a account</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginInp;
