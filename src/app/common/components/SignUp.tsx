"use client";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const SignUp = () => {
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();
  // const [user, setUser] = useAuthState(auth);
  const signIn = async () => {
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
      <div className="grid justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5">
        <input
          className="border border-black"
          type="email"
          placeholder="Email..."
        />
        <input
          className="border border-black"
          type="password"
          placeholder="Password..."
        />
        <button className="bg-gray-500 rounded text-white px-5">Sign Up</button>
        <div
          onClick={signIn}
          className="flex px-5 bg-blue-500 rounded text-white justify-center"
        >
          <button>Sign up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
