"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

  const doSignup = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
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
          alert("회원가입이 완료되었습니다. 로그인 해주세요.");
          router.push("signin");
        } else {
          alert("중복된 이메일이거나 에러 확인이 필요합니다");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-4">
        <p className="font-bold">이메일 : </p>
        <input
          type="email"
          name="userEmail"
          className="px-4 py-1 rounded"
          placeholder="random@email.com"
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-row items-center justify-between m-4">
        <p className="font-bold">비밀번호 : </p>
        <form>
          <input
            type="password"
            name="userPassword"
            className="px-4 py-1 ml-2 rounded"
            placeholder="8자리 이상 입력해주세요"
            autoComplete="off"
            onChange={handleInput}
          />
        </form>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="p-2 m-4 font-bold bg-blue-500 rounded hover:bg-blue-700 disabled:bg-blue-200 disabled:text-gray-600"
          onClick={doSignup}
          disabled={validationCheck ? false : true}
          type="button"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Validation;
