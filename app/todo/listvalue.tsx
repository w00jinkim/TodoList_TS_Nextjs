import React from "react";

const Listvalue = () => {
  // return (
  //   <div>{todolistValue?.map((item) => (
  //     <li key={item?.id} className="w-full">
  //       <div
  //         className={
  //           !editMode
  //             ? "flex flex-row justify-center items-center w-full text-lg"
  //             : "hidden"
  //         }
  //       >
  //         <label className="w-1/3">
  //           <input
  //             className="m-1 text-lg accent-white"
  //             type="checkbox"
  //             name="isCompleted"
  //             onChange={(event) => {
  //               const isChecked = event.target.checked;
  //               handleChecked();
  //               modifyCheckList(item.id, isChecked);
  //             }}
  //             checked={item.isCompleted}
  //           />
  //           <span className="w-full text-yellow-50">{item?.todo}</span>
  //         </label>
  //         <button
  //           className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
  //           onClick={() => {
  //             setEditMode((prevEditMode) => ({
  //               ...prevEditMode,
  //               [item.id]: !prevEditMode[item.id],
  //             }));
  //             setToModifyText(item?.todo);
  //             setIsChecked(item?.isCompleted);
  //           }}
  //         >
  //           수정
  //         </button>
  //         <button
  //           className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
  //           onClick={() => {
  //             deletetodoList(item?.id);
  //             handleCreateTodoClick();
  //           }}
  //         >
  //           삭제
  //         </button>
  //       </div>
  //       {editMode[item.id] && (
  //         <div className="flex flex-row items-center justify-center w-full text-lg">
  //           <label className="w-1/3">
  //             <input
  //               className="accent-white"
  //               type="checkbox"
  //               checked={isChecked}
  //               onChange={handleChecked}
  //             />
  //             <input
  //               className="w-11/12 mx-2 rounded-sm bg-yellow-50"
  //               type="text"
  //               value={toModifyText}
  //               onChange={handleInput}
  //               autoFocus={true}
  //             />
  //           </label>
  //           <button
  //             className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
  //             onClick={() => {
  //               modifytodoList(item.id);
  //               setEditMode((prevEditMode) => ({
  //                 ...prevEditMode,
  //                 [item.id]: false,
  //               }));
  //             }}
  //           >
  //             제출
  //           </button>
  //           <button
  //             className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
  //             onClick={() =>
  //               setEditMode((prevEditMode) => ({
  //                 ...prevEditMode,
  //                 [item.id]: false,
  //               }))
  //             }
  //           >
  //             취소
  //           </button>
  //         </div>
  //       )}
  //     </li>
  //   ))}</div>
  // )
};

export default Listvalue;
