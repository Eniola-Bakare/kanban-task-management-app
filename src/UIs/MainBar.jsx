import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";
import HeaderDetails from "./HeaderDetails";

function MainBar() {
  const { showSidebar, boards, setShowBoardForm, currentBoard } =
    useBoardsContext();
  console.log("currentBoard?.columns", currentBoard?.columns?.length);
  return (
    <div
      className={`bg-neutral w-${
        showSidebar ? "full" : "[80%]"
      } dark:bg-black-light px-8 h-[100%] flex flex-col items-center gap-6 justify-center`}
    >
      {currentBoard?.columns?.length === undefined ? (
        <>
          <p className="text-lg text-grey-scale font-extrabold">
            Create a new board to get started.
          </p>
          <div className="">
            <Button
              name="+ Create New Board"
              onClick={
                boards.length === 0
                  ? () => setShowBoardForm(true)
                  : console.log("cominggg")
              }
            />
          </div>
        </>
      ) : currentBoard?.columns.length > 0 ? (
        <p className="text-lg text-grey-scale font-extrabold">
          {" "}
          More than 0 col
        </p>
      ) : (
        <>
          <p className="text-lg text-grey-scale font-extrabold">
            empty columns!!
          </p>
          <div className="">
            <Button
              name="+ Add New Column"
              onClick={() => setShowBoardForm(true)}
            />
          </div>
        </>
      )}
      {/* <div className="">
        <Button
          name={`${
            boards.length === 0 ? "+ Create New Board" : "+ Add New Column"
          }`}
          onClick={
            boards.length === 0
              ? () => setShowBoardForm(true)
              : console.log("cominggg")
          }
        />
      </div> */}
    </div>
  );
}

export default MainBar;
