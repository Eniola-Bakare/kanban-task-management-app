import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";
import FormInput from "./FormInput";

function AddNewBoard() {
  const { boardName, setBoardName } = useBoardsContext();

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
          htmlFor="boardColumns"
          className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
        >
          Columns
        </label>
        <input
          id="boardColumns"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          type="text"
          placeholder="e.g. To do"
          className="w-full border border-grey-scale rounded-md indent-4 p-3 dark:bg-grey-light dark:text-grey-scale font-medium "
        />
      </div>
      <Button width="full" btnType="secondary" name="+Add New Column" />
      <Button width="full" name="Create New Board" />
    </div>
  );
}

export default AddNewBoard;
