"use client";
import { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUpInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth,googleProvider);
      console.log("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  return (
    <div className="flex justify-center gap-5">
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border border-black"
        type="email"
        placeholder="Email..."
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border border-black"
        type="password"
        placeholder="Password..."
      />
      <button onClick={signIn} className="bg-gray-500 rounded text-white">
        SignUp
      </button>
      <button onClick={signInWithGoogle} className="bg-blue-500 rounded text-white">
        Register with google
      </button>
    </div>
  );
};

export default SignUpInput;
