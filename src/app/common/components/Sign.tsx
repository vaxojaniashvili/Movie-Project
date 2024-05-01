"use client";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../assets/Movie.png";
import Image from "next/image";
import Input from "./Input/Input";
import Button from "./Button/Button";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/pages/Login");
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      if (!email) {
        setEmailValidate(true);
      } else {
        setEmailValidate(false);
      }
      if (!password) {
        setPasswordValidate(true);
      } else {
        setPasswordValidate(false);
      }
      handleSubmit(e);
    }
  };

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[455px] sm:w-[400px] bg-[#161D2F] rounded-[20px] `}
    >
      <Image
        width={30}
        height={30}
        className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={logo.src}
        alt={""}
      />
      <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="grid items-center gap-5 w-full">
        <Input
          onKeyDown={handleKeyDown}
          className={`mx-8 py-3 bg-transparent outline-none text-white ${
            emailValidate ? "border-red-500" : "border-[#5A698F]"
          } border-b px-5 font-outfit`}
          type="email"
          placeholder="Email address"
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          value={email}
        />
        <Input
          onKeyDown={handleKeyDown}
          className={`mx-8 py-3 bg-transparent outline-none text-white ${
            passwordValidate ? "border-red-500" : "border-[#5A698F]"
          } border-b px-5`}
          type="password"
          placeholder="Password"
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
          value={password}
        />
        <Input
          onKeyDown={handleKeyDown}
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type="password"
          placeholder="Repeat password"
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setRePassword(e.target.value)
          }
          value={rePassword}
        />
        {error ? (
          <div className="flex text-red-500 justify-center">{error}</div>
        ) : (
          <div></div>
        )}
        <Button
          onClick={() => {
            if (!email) {
              setEmailValidate(true);
            } else {
              setEmailValidate(false);
            }
            if (!password) {
              setPasswordValidate(true);
            } else {
              setPasswordValidate(false);
            }
          }}
          type="submit"
          className="bg-[#FC4747] rounded-md text-white px-5 mx-8 py-3 mt-[-15px]"
        >
          Create an account
        </Button>
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
