import { useBoardsContext } from "../Contexts/ContextApi";

function FormColumns() {
  const { columns, currentBoard } = useBoardsContext();
  console.log(currentBoard.columns);
  return (
    <div
      className="columns flex flex-col "
      onClick={(e) => e.stopPropagation()}
    >
      <label
        htmlFor=""
        className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
      >
        Columns
      </label>
      <div className="">{currentBoard?.columns[0].name}</div>
      <p>Hello col</p>
    </div>
  );
}

export default FormColumns;
