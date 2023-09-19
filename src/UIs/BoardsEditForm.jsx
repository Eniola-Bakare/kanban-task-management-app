import React, { useEffect, useRef, useState, memo } from "react";

import { useBoardsContext } from "../Contexts/ContextApi";

function BoardInputColumns({ id, colName }) {
  const {
    handleRemoveColumn,
    setColumnNames,
    columnNames,
    column,
    columnName,
    saveChanges,
    setCurrentBoard,
    setSaveChanges,
  } = useBoardsContext();
  const [columnNameLocal, setColumnNameLocal] = useState(colName || columnName);
  console.log(columnNames);

  return (
    <div
      className="columns-input w-full flex items-center gap-4 mb-4"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        id={id}
        value={columnNameLocal}
        onChange={(e) => {
          setColumnNameLocal(e.target.value);
          setColumnNames((prev) => ({
            ...prev,
            [id]: columnNameLocal,
          }));
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

export default React.memo(BoardInputColumns);
