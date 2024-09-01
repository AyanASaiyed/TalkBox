import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      if (!res.ok) {
        // Handle different status codes
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to sign up");
      }

      const data = await res.json();

      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);

      console.log("Signup successful:", data);
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(`Signup Error: ${error.message}`);
      console.error("Signup Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please enter all requested fields.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must contain at least 8 characters.");
    return false;
  }

  return true;
}
