import { useEffect } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";

function FormInput({ formName, value }) {
  const { boardName, setBoardName, currentBoard } = useBoardsContext();
  useEffect(() => {
    if (value) setBoardName(value);
  }, []);
  return (
    <div
      className="form-input flex flex-col mb-3"
      onClick={(e) => e.stopPropagation()}
    >
      <label
        htmlFor="boardName"
        className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
      >
        {formName}
      </label>
      <input
        id="boardName"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        type="text"
        placeholder="e.g. Web Design"
        className="w-full border border-grey-scale rounded-md indent-4 p-3 dark:bg-grey-light dark:text-grey-scale font-medium "
      />
    </div>
  );
}

export default FormInput;
