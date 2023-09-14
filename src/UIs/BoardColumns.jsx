import { useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";

function BoardColumns({ id }) {
  const [columnName, setColumnName] = useState("");
  const { handleRemoveColumn, setColumnNames, columnNames } =
    useBoardsContext();

  return (
    <div className="columns-input w-full flex items-center gap-4 mb-4">
      <input
        id={id}
        value={columnName}
        onChange={(e) => {
          setColumnName(e.target.value);

          setColumnNames({ ...columnNames, [id]: e.target.value });
          console.log(columnNames);
        }}
        type="text"
        placeholder="e.g. To do"
        className=" border border-grey-scale rounded-md indent-4 p-3 dark:bg-grey-light dark:text-grey-scale font-medium w-[95%]"
      />
      <span>
        {
          <img
            src="./icon-cross.svg"
            alt="cancel icon"
            onClick={() => {
              console.log(columnName);
              handleRemoveColumn(id);
            }}
          />
        }
      </span>
    </div>
  );
}

export default BoardColumns;
