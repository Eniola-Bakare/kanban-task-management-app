import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";

function AddColumn() {
  const { setShowBoardEditForm } = useBoardsContext();
  return (
    <>
      <p className="text-lg text-grey-scale font-extrabold">
        This board is empty. Create a new column to get started
      </p>
      <div className="">
        <Button
          name="+ Add New Column"
          onClick={() => setShowBoardEditForm(true)}
        />
      </div>
    </>
  );
}

export default AddColumn;
