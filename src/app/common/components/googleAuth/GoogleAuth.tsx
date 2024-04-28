import { auth } from "@/app/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GoogleAuth = () => {
  const router = useRouter();
  const googleAuth = new GoogleAuthProvider();
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
    <div
      onClick={handleGoogleSignin}
      className="flex items-center gap-5 px-5 bg-blue-500 rounded text-white justify-center"
    >
      <Image
        width={20}
        height={20}
        className="rounded-full"
        src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg"
        alt="google"
      />
      <button>Sign up with Google</button>
    </div>
  );
};

export default GoogleAuth;
