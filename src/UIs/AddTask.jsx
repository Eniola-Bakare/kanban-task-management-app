import { useState } from "react";
import Button from "./Button";
import { useBoardsContext } from "../Contexts/ContextApi";
import SubTaskInput from "./SubTaskInput";

function AddTask() {
  const { subTaskArr, setSubTaskArr } = useBoardsContext();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <div
      className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col  gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-2xl font-bold text-black dark:text-white mb-8">
        Add New Task
      </p>

      {/* title */}
      <div
        className="form-input flex flex-col mb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <label
          htmlFor="title"
          className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
        >
          Title
        </label>
        <input
          id="title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          type="text"
          placeholder="e.g. call HR"
          className="w-full border border-grey-scale rounded-md p-3 dark:bg-grey-light dark:text-grey-scale font-medium hover:border-2 cursor-pointer active:border-2 outline-none"
        />
      </div>

      {/* description */}
      <div
        className="form-input flex flex-col mb-3 "
        onClick={(e) => e.stopPropagation()}
      >
        <label
          htmlFor="title"
          className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
        >
          Description
        </label>
        <textarea
          id="title"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="e.g. it's good to take some break. This 15 minutes break will recharge the battries a litlle."
          className="w-full border border-grey-scale rounded-md p-3 pb-8 dark:bg-grey-light dark:text-grey-scale font-medium active:border-2 hover:border-2 cursor-pointer outline-none overscroll-contain"
        />
      </div>

      {/* subtasks */}
      <div className="subtasksInput">
        <p className="mb-3 text-xl font-semibold text-grey-scale dark:text-white">
          Subtasks
        </p>
        {subTaskArr}
      </div>
      <Button
        name="+Add New Subtask"
        btnType="secondary"
        onClick={(e) => {
          e.stopPropagation();
          setSubTaskArr((prev) => [
            ...prev,
            <SubTaskInput
              id={Math.random() * 1000}
              key={Math.random() * 1000}
            />,
          ]);
        }}
      />
    </div>
  );
}

export default AddTask;
