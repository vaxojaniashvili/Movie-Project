"use client";
import { auth } from "@/app/firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const page = () => {
  const [user, setUser] = useAuthState(auth);
  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-5">
        <h1 className="flex justify-center">Profile</h1>
        <div>
          {user ? (
            <div>
              {user.displayName} - {user.email}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
