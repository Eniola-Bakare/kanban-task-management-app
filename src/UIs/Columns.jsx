import { useBoardsContext } from "../Contexts/ContextApi";

function Columns() {
  const { currentBoard } = useBoardsContext();
  console.log(currentBoard);
  return <div>current columns</div>;
}

export default Columns;
