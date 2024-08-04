"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackToHome() {
  const router = useRouter();
  const handleToHome = () => {
    router.push("/");
  };
  return (
    <button
      className="py-4 px-6 bg-slate-700 text-white rounded-2xl mt-4"
      onClick={handleToHome}
    >
      BackToHome
    </button>
  );
}
