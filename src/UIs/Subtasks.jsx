import { useState } from "react";

function Subtasks({ id, subTaskItem, isCompleted }) {
  const [checked, setChecked] = useState(isCompleted);
  return (
    <div
      className="flex gap-3 items-center bg-neutral/50 dark:bg-black-light dark:text-grey-scale p-4 rounded-md"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        className="accent-purple-primary cursor-pointer "
      />
      <label
        id={id}
        className={`font-bold cursor-pointer`}
        onClick={() => setChecked((prev) => !prev)}
      >
        {subTaskItem}
      </label>
    </div>
  );
}

export default Subtasks;
