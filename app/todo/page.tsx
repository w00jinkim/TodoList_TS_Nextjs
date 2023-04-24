import React from "react";
import Logout from "./logout";
import Todolist from "./todolist";

const Todo = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-white mt-14">
          Will&apos;s Quick Checklist
        </h1>
      </div>
      <Logout />
      <Todolist />
    </div>
  );
};

export default Todo;
