import { useEffect, useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";
import FormInput from "./FormInput";
import BoardColumns from "./BoardColumns";

function AddNewBoard() {
  const { boardName, setBoardName, columns, setColumns } = useBoardsContext();

  return (
    <div className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col gap-5">
      <p className="text-2xl font-bold text-black dark:text-white mb-8">
        Add New Board
      </p>
      <FormInput />
      <div
        className="columns flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        <label
          htmlFor=""
          className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
        >
          Columns
        </label>
        {columns}
      </div>
      <Button
        width="full"
        btnType="secondary"
        name="+Add New Column"
        onClick={(e) => {
          e.stopPropagation();
          console.log(columns);
          setColumns((prev) => [
            ...prev,
            <BoardColumns
              id={Math.random() * 1000}
              key={Math.random() * 1000}
            />,
          ]);
        }}
      />
      <Button
        width="full"
        name="Create New Board"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default AddNewBoard;
