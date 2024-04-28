"use client";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../assets/Movie.png";
import Image from "next/image";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/pages/profile");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[450px] bg-[#161D2F] rounded-[20px]`}
    >
      <Image
        width={30}
        height={30}
        className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={logo.src}
        alt={""}
      />
      <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="grid items-center gap-5 w-full">
        <input
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5 font-outfit"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
        />
        {error ? <div className="text-red-500">{error}</div> : <div></div>}
        <button
          type="submit"
          className="bg-[#FC4747] rounded-md text-white px-5 mx-8 py-3 mt-[-15px]"
        >
          Create an account{" "}
        </button>
        <div className="flex justify-center items-center text-white px-5 rounded">
          <div className="flex justify-center items-center text-white px-5 rounded gap-2 font-outfit">
            <p>Already have an account?</p>
            <Link href="/pages/Login">
              <p className="text-[#FC4747]">Login</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
