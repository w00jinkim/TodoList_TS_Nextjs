import React from "react";
import Validation from "./signin";

const Signin = () => {
  return (
    <div className="flex items-start justify-center w-full h-screen bg-yellow-50">
      <div className="flex flex-col justify-center">
        <h1 className="my-20 text-4xl font-bold">
          Will&apos;s Quick Checklist
        </h1>
        <div className="flex justify-center w-full mb-8">
          서비스 이용을 위해 로그인 해 주세요!
        </div>
        <label>
          <Validation />
        </label>
      </div>
    </div>
  );
};

export default Signin;
