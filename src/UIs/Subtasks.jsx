import { memo, useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";

function Subtasks({ id, subTaskItem, isCompleted }) {
  const { setShowStatus } = useBoardsContext();
  const [checked, setChecked] = useState(isCompleted);
  return (
    <div
      className="flex gap-3 items-center bg-neutral/50 dark:bg-black-light dark:text-grey-scale p-4 rounded-md"
      onClick={(e) => {
        e.stopPropagation();
        setShowStatus(false);
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          setChecked((prev) => !prev);
        }}
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

export default memo(Subtasks);
