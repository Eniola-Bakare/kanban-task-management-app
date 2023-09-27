import { useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";

function SubTaskInput({ id }) {
  const { setSubTaskArr } = useBoardsContext();
  const [subtaskName, setSubtaskName] = useState("");

  function handleRemoveTask(id) {
    console.log(id)
    setSubTaskArr((prev) => prev.filter((subTask) => subTask.props.id !== id));
  }
  return (
    <div
      className="columns-input w-full flex items-center gap-4 mb-4"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        id={id}
        value={subtaskName}
        // onChange={() => {
        //   // setColumnName(e.target.value);
        //   // setColumnNames((prev) => ({ ...prev, [id]: e.target.value }));
        // }}
        type="text"
        placeholder="e.g. To do"
        className=" border border-grey-scale rounded-md indent-4 p-3 dark:bg-grey-light dark:text-grey-scale font-medium w-[95%]"
      />
      <span>
        {
          <img
            src="./icon-cross.svg"
            alt="cancel icon"
            onClick={() => {
              handleRemoveTask(id);
            }}
          />
        }
      </span>
    </div>
  );
}

export default SubTaskInput;
