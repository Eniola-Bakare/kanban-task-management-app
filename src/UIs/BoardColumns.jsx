import { useBoardsContext } from "../Contexts/ContextApi";
import CurrentBoardDetails from "./CurrentBoardDetails";

function BoardColumns({ currentBoard }) {
  const { setShowBoardEditForm } = useBoardsContext();
  return (
    <div className="flex overflow-x-scroll gap-3 w-full h-full items-start ">
      {currentBoard?.columns
        // ?.filter((col) => col?.tasks?.length > 0)
        .map((eachCol) => (
          <CurrentBoardDetails eachCol={eachCol} key={eachCol.name} />
        ))}
      <div
        className="add-column-bar w-[280px] bg-grey-scale/20 h-[94%] flex flex-shrink-0 justify-center items-center mt-8 rounded-md"
        onClick={() => setShowBoardEditForm(true)}
      >
        <p className="text-grey-scale font-bold text-xl">+ New Column</p>
      </div>
    </div>
  );
}

export default BoardColumns;
