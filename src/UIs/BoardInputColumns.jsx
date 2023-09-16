import React, { useEffect, useRef, useState, memo } from "react";

import { useBoardsContext } from "../Contexts/ContextApi";

function BoardInputColumns({ id, colName }) {
  const [columnName, setColumnName] = useState(colName || "");
  let newColumnName = columnName;

  
  const {
    handleRemoveColumn,
    setColumnNames,
    currColNames,
    columnNames,
    saveChanges,
    setCurrentBoard,
  } = useBoardsContext();

  function handleOnChange(e) {
    if (colName) {
      console.log(e.target.value);
      console.log(colName);
      // console.log(currentBoard.columns);

      setColumnName(e.target.value);

      setCurrentBoard((prev) => ({
        ...prev,
        columns: prev.columns.map((col) => {
          if (col.name === colName) return { ...col, name: columnName };
          return col;
        }),
      }));
      setColumnNames((prev) => ({ ...prev, [colName]: colName }));
      return;
    }

    setColumnName(e.target.value);
    setColumnNames((prev) => ({ ...prev, [id]: e.target.value }));
  }
  console.log(currColNames);

  return (
    <div
      className="columns-input w-full flex items-center gap-4 mb-4"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        id={id}
        value={columnName}
        onChange={(e) => handleOnChange(e)}
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
