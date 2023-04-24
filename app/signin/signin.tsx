"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Validation = () => {
  type Emailpassword = { userEmail: string; userPassword: string };
  const [inputValue, setInputValue] = useState<Emailpassword>({
    userEmail: "",
    userPassword: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev: Emailpassword) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const validationCheck =
    inputValue.userEmail.includes("@") && inputValue.userPassword.length >= 8;

  const doSignin = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputValue.userEmail,
        password: inputValue.userPassword,
      }),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else if (response.status === 404) {
          alert("해당 사용자가 존재하지 않습니다.");
        } else if (response.status === 401) {
          alert("비밀번호가 일치하지 않습니다.");
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        localStorage.setItem("TOKEN", data.access_token);
        router.push("/todo");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-4">
        <p>이메일 : </p>
        <input
          type="email"
          name="userEmail"
          className="px-4 py-1 rounded"
          placeholder="random@email.com"
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-row items-center justify-between m-4">
        <p>비밀번호 : </p>
        <form>
          <input
            type="password"
            name="userPassword"
            className="px-4 py-1 ml-2 rounded"
            placeholder="8자리 이상 입력해주세요"
            autoComplete="Off"
            onChange={handleInput}
          />
        </form>
      </div>
      <div className="flex justify-center w-full">
        <button
          className={
            "w-1/3 p-2 m-4 font-bold bg-blue-500 rounded hover:bg-blue-700 disabled:bg-blue-200 disabled:text-gray-500"
          }
          onClick={(e) => {
            router.push("./signup");
          }}
        >
          회원가입
        </button>
        <button
          className="w-1/3 p-2 m-4 font-bold bg-blue-500 rounded hover:bg-blue-700 disabled:bg-blue-200 disabled:text-gray-500"
          onClick={doSignin}
          disabled={validationCheck ? false : true}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Validation;
