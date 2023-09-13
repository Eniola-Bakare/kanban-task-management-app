import { useEffect, useState } from "react";
import { useBoardsContext } from "../ContextApi";
// import { boards as boardsData } from "../data";

function Sidebar() {
  const { boardsData } = useBoardsContext();
  const [boards, setBoards] = useState(boardsData.boards);

  // console.log(boards);

  return (
    <div className="w-3/12 h-full border-r-2 pt-12 px-10 border-r-neutral">
      <p className="pb-5">ALL BOARDS (3)</p>
      <section className="boards">
        {boards.map((eachBoard) => {
          return (
            <div
              key={eachBoard}
              className="each-board flex w-full gap-3 items-center"
            >
              <img src="./icon-board.svg" className="w-5 h-5" />
              <p className="borad-name">{eachBoard.name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Sidebar;
