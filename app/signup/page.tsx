import React from "react";
import Validation from "./validation";

const Signup = () => {
  return (
    <div className="flex items-start justify-center w-full h-screen bg-yellow-50">
      <div className="flex flex-col justify-center">
        <h1 className="my-20 text-4xl font-bold">
          Will&apos;s Quick Checklist
        </h1>
        <div className="flex justify-center">
          <h2 className="mb-20 text-3xl font-bold">Signup</h2>
        </div>
        <div className="flex justify-center w-full mb-8">
          서비스 이용을 위해 회원가입 해 주세요!
        </div>
        <label>
          <Validation />
        </label>
      </div>
    </div>
  );
};

export default Signup;
