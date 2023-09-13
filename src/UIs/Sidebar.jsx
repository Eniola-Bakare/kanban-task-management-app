import { useEffect, useState } from "react";
import { useBoardsContext } from "../ContextApi";
import Toggler from "./Toggler";
// import { boards as boardsData } from "../data";

function Sidebar() {
  const { boardsData } = useBoardsContext();
  const [boards, setBoards] = useState(boardsData.boards);

  const totalBoards = boards.reduce((acc, _) => (acc += 1), 0);
  // console.log(boards);

  return (
    // w-3/12
    <div className="w-[20%] h-[100%] border-r-2 pt-12 px-10 border-r-neutral flex flex-col relative">
      <p className="mb-6 font-semibold text-grey-scale text-xs">
        ALL BOARDS ({totalBoards})
      </p>
      <section className="boards">
        {boards.map((eachBoard) => {
          return (
            <div
              key={eachBoard.name}
              className="each-board flex w-full gap-3 items-center mb-5 cursor-pointer"
            >
              <img src="./icon-board.svg" className="w-5 h-5 " />
              <p className="borad-name font-semibold text-grey-scale text-sm">
                {eachBoard.name}
              </p>
            </div>
          );
        })}
        <div className="each-board flex w-full gap-3 items-center mb-5 cursor-pointer">
          <img src="./icon-board.svg" className="w-5 h-5 " />
          <p className="borad-name font-semibold text-purple-primary text-sm">
            + Create New Board
          </p>
        </div>
      </section>

      <Toggler />
    </div>
  );
}

export default Sidebar;
