import { useState } from "react";

function Subtasks({ id, subTaskItem, isCompleted }) {
  const [checked, setChecked] = useState(isCompleted);
  return (
    <div className="flex gap-3 items-center bg-neutral/50 p-4 rounded-md" onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <p className={`font-bold `}>{subTaskItem}</p>
    </div>
  );
}

export default Subtasks;
