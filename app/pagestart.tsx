"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagestart = () => {
  const router = useRouter();

  return (
    <div>
      <button
        className="p-2 font-bold bg-blue-600 rounded m-14 hover:bg-blue-800"
        onClick={() => router.push("/signin")}
      >
        Let&apos;s get started!
      </button>
    </div>
  );
};

export default Pagestart;
