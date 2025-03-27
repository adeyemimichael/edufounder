"use client";
import { useState } from "react";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function WaitList() {
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 const [ password, setPassword ] = useState("");
  // ✅ Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
        await signInWithPopup( auth, googleProvider);
        alert("successfully sign in to google ")
    }
    catch ( error: any ) {
        alert (error.message)
        console.error ("sign is not successful" , error );
    }
  }

  // ✅ Email/Password Sign-Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-up successful!");
    } catch (error: any) {
      alert(error.message);
      console.error("Sign-up Error:", error);
    }
  };

  return (
    <div>

            {/* Google Sign-In */}
            <button onClick={handleGoogleSignIn} className="btn btn-primary mt-5">Sign in with Google</button>

            {/* Email Sign-Up */}
            <form onSubmit={handleSignUp} className="mt-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block border p-2 rounded w-full"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block border p-2 rounded w-full mt-2"
                required
              />
              <button type="submit" className="btn btn-secondary mt-3">Register</button>
            </form>
          
</div>
         
  );
}
