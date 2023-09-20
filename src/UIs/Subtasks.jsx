import { useState } from "react";

function Subtasks({ id, subTaskItem, isCompleted }) {
  const [checked, setChecked] = useState(isCompleted);
  return (
    <div className="flex " onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <p>{subTaskItem}</p>
    </div>
  );
}

export default Subtasks;
