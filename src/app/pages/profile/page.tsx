"use client";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const page = () => {
  const router = useRouter();
  const [user, setUser] = useAuthState(auth);
  console.log(auth?.currentUser?.email);
  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/pages/Login");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (  
    <div className="flex justify-center items-center">
      <div className="grid gap-5">
        <div className="flex gap-5 justify-center">
          <h1 className="flex justify-center">Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-black rounded text-white px-5"
          >
            logOut
          </button>
        </div>
        <div>
          {user ? (
            <div>
              {user.displayName}  {user.email}
            </div>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
