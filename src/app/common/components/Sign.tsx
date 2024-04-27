"use client";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const googleAuth = new GoogleAuthProvider();
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

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
      router.push("/pages/profile");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5"
      >
        <input
          className="border border-black"
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="border border-black"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="border border-black"
          type="password"
          placeholder="Re-Password..."
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
        />
        {error ? <div className="text-red-500">{error}</div> : <div></div>}
        <button type="submit" className="bg-gray-500 rounded text-white px-5">
          Sign Up
        </button>
        <div
          onClick={handleGoogleSignin}
          className="flex items-center gap-5 px-5 bg-blue-500 rounded text-white justify-center"
        >
          <img
            className="w-[20px] h-[20px] rounded-full"
            src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg"
            alt="google"
          />
          <button>Sign up with Google</button>
        </div>
        <Link href="/pages/Login">
          <div className="flex justify-center items-center bg-blue-500 text-white px-5 rounded">
            <button className="flex justify-center items-center bg-blue-500 text-white px-5 rounded">
              Login
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
