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
      } dark:bg-black-light px-8 h-[100%] flex flex-col items-center gap-6 ${currentBoard?.columns?.length === undefined ? 'justify-center': 'justify-start pt-8'}`}
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
        // <p className="text-lg text-grey-scale font-extrabold">
        //   {" "}
        //   More than 0 col
        // </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full items-start overflow-scroll scrollbar-none">
          {currentBoard.columns.map((eachCol) => (
            <div className="grid grid-cols-1" key={eachCol.name}>
              {/* column header */}
              <div className="column-header rounded flex items-center gap-3">
                <div className="rounded-full bg-purple-primary w-2 h-2"></div>
                <span className="text-grey-scale font-medium uppercase">
                  {eachCol.name} ({" "}
                  {eachCol?.tasks?.reduce((acc) => (acc += 1), 0)} )
                </span>
              </div>
              {/* tasks items */}
              {eachCol?.tasks?.map((task) => (
                <div
                  key={task.title}
                  className="bg-white m-2 rounded-lg px-4 py-3 "
                >
                  <p className="font-bold text-black text-sm"> {task.title}</p>
                  <p className="number-of-substacks font-semibold mt-1 text-sm text-grey-scale">
                    <span>0 of {task?.subtasks.reduce((acc, curr) => (acc += 1), 0)} subtasks</span>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
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
