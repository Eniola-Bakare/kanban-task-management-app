import { useBoardsContext } from "../Contexts/ContextApi";
import CurrentBoardDetails from "./CurrentBoardDetails";

function BoardColumns({ currentBoard }) {
  const { setShowBoardEditForm } = useBoardsContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full h-full items-start overflow-scroll overflow-y-hidden overflow-x-hidden">
      {currentBoard?.columns
        ?.filter((col) => col?.tasks?.length > 1)
        .map((eachCol) => (
          <CurrentBoardDetails eachCol={eachCol} key={eachCol.name} />
        ))}
      <div
        className="add-column-bar bg-grey-scale/20 h-[94%] flex justify-center items-center mt-8 rounded-md"
        onClick={() => setShowBoardEditForm(true)}
      >
        <p className="text-grey-scale font-bold text-xl">+ New Column</p>
      </div>
    </div>
  );
}

export default BoardColumns;
