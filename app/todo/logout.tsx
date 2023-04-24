"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
  const router = useRouter();

  const deleteTokenLogout = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem("TOKEN");
    router.push("./");
  };

  return (
    <div>
      <div className="w-full">
        <button
          className="absolute p-2 font-bold bg-blue-600 rounded hover:bg-blue-800 right-10 top-14"
          onClick={deleteTokenLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Logout;
