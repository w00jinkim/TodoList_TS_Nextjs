"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Todolist = () => {
  type TodoListValue = {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
  };
  const [todolistValue, setTodolistValue] = useState<TodoListValue[]>([]);
  const [todoState, setTodoState] = useState<boolean>(false);
  const [toModifyText, setToModifyText] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<{ [key: number]: boolean }>({
    0: false,
  });
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const { value } = event.target;
      setToModifyText(value);
    }
  };

  const handleCreateTodoClick = () => {
    setTodoState((prev) => !prev);
  };

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("TOKEN")) {
      router.push("/signin");
    } else {
      fetch("https://www.pre-onboarding-selection-task.shop/todos", {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTodolistValue(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [router, todoState]);

  const createtodoList = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: inputValue,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletetodoList = (id: number) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      },
    })
      .then((res) => res)
      .then((data) => {
        setTodoState((prev) => !prev);
      });
  };

  const modifytodoList = (id: number) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: toModifyText,
        isCompleted: isChecked,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const modifyCheckList = (id: number, isChecked: boolean) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todolistValue.find((item) => item.id === id)?.todo,
        isCompleted: isChecked,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center mt-10 ml-10">
        <input
          type="text"
          className="w-1/3 p-1 m-5 text-lg rounded-sm bg-yellow-50"
          onChange={(e) => {
            setInputValue(e.target.value);
            handleInput;
          }}
          placeholder="체크리스트 추가!"
          value={inputValue}
          autoFocus={true}
        />
        <button
          className="p-1 m-1 rounded hover:bg-white hover:font-bold bg-yellow-50 disabled:text-gray-500 disabled:hover:font-normal disabled:hover:bg-white"
          onClick={async () => {
            await createtodoList();
            handleCreateTodoClick();
            setInputValue("");
          }}
          disabled={inputValue ? false : true}
        >
          추가
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center pl-5 mt-10 space-y-3">
        {todolistValue?.map((item) => (
          <li key={item?.id} className="w-full">
            <div
              className={
                !editMode
                  ? "flex flex-row justify-center items-center w-full text-lg"
                  : "hidden"
              }
            >
              <label className="w-1/3">
                <input
                  className="m-1 text-lg accent-white"
                  type="checkbox"
                  name="isCompleted"
                  onChange={(event) => {
                    const isChecked = event.target.checked;
                    handleChecked();
                    modifyCheckList(item.id, isChecked);
                  }}
                  checked={item.isCompleted}
                />
                <span className="w-full text-yellow-50">{item?.todo}</span>
              </label>
              <button
                className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                onClick={() => {
                  setEditMode((prevEditMode) => ({
                    ...prevEditMode,
                    [item.id]: !prevEditMode[item.id],
                  }));
                  setToModifyText(item?.todo);
                  setIsChecked(item?.isCompleted);
                }}
              >
                수정
              </button>
              <button
                className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                onClick={() => {
                  deletetodoList(item?.id);
                  handleCreateTodoClick();
                }}
              >
                삭제
              </button>
            </div>
            {editMode[item.id] && (
              <div className="flex flex-row items-center justify-center w-full text-lg">
                <label className="w-1/3">
                  <input
                    className="accent-white"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChecked}
                  />
                  <input
                    className="w-11/12 mx-2 rounded-sm bg-yellow-50"
                    type="text"
                    value={toModifyText}
                    onChange={handleInput}
                    autoFocus={true}
                  />
                </label>
                <button
                  className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                  onClick={() => {
                    modifytodoList(item.id);
                    setEditMode((prevEditMode) => ({
                      ...prevEditMode,
                      [item.id]: false,
                    }));
                  }}
                >
                  제출
                </button>
                <button
                  className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                  onClick={() =>
                    setEditMode((prevEditMode) => ({
                      ...prevEditMode,
                      [item.id]: false,
                    }))
                  }
                >
                  취소
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
