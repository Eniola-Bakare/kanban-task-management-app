import React, { useEffect, memo } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";
import FormInput from "./FormInput";
import BoardInputColumns from "./BoardInputColumns";
import Button from "./Button";
import BoardsEditForm from "./BoardsEditForm";

const MemoizedBoardEditForm = memo(BoardsEditForm);

function EditBoard() {
  const {
    currentBoard,
    setCurrentBoard,
    boardName,
    setBoards,
    columnNames,
    columns,
    setColumns,
    setBoardName,
    setShowBoardEditForm,
    setSaveChanges,
    setColumnNames,
  } = useBoardsContext();

  // console.log(currentBoard);

  function handleChanges() {
    if (boardName === "") return;
    setSaveChanges(true);

    // for board's name
    setCurrentBoard((prev) => ({ ...prev, name: boardName }));
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id === currentBoard.id) return { ...board, name: boardName };
        return board;
      })
    );

    // for board columns
    // console.log(columnNames);
    // console.log(currentBoard);
    // console.log(columnNames);
    setCurrentBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((col) => {
        console.log(col);
        if (columnNames[col.id]) {
          return { ...col, name: columnNames[col.id] };
        } else if (col?.props?.id) {
          // return {
          //   ...col,
          //   id: col.props.id,
          //   name: columnNames[col.props.id],
          //   tasks: [],
          // };
          return {
            id: col.props.id,
            name: columnNames[col.props.id],
            tasks: [],
          };
        }
        return col;
      }),
    }));

    setBoardName("");
    setSaveChanges(false);
    setColumnNames({});
    setShowBoardEditForm(false);
  }
  // console.log(currentBoard.columns);

  return (
    <div className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col gap-5">
      <p className="text-2xl font-bold text-black dark:text-white mb-8">
        Edit Board
      </p>
      <FormInput formName="Board Name" value={currentBoard.name} />
      <div
        className="columns flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        <label
          htmlFor=""
          className="mb-3 text-xl font-semibold text-grey-scale dark:text-white"
        >
          Board Columns
        </label>
        {currentBoard?.columns.map((col) => {
          if (!col.id) {
            const column = col.props.id;
            return (
              <MemoizedBoardEditForm
                colName={columnNames[column]}
                key={column}
                id={column}
              />
            );
          }
          return (
            <MemoizedBoardEditForm
              colName={col?.name}
              key={col?.id}
              id={col?.id}
            />
          );
        })}
      </div>

      <Button
        width="full"
        btnType="secondary"
        name="+Add New Column"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentBoard((prev) => {
            const col = (
              <MemoizedBoardEditForm
                id={Math.random() * 1000}
                key={Math.random() * 1000}
              />
            );
            //   const col = <BoardInputColumns
            //   // id={Math.random() * 1000}
            //   key={Math.random() * 1000}
            // />
            //   const col = <BoardInputColumns
            //   // id={Math.random() * 1000}
            //   key={Math.random() * 1000}
            // />
            setColumns((prev) => [...prev, col]);
            return { ...prev, columns: [...prev.columns, col] };
          });
          console.log(columns);
          // setColumns((prev) => [
          //   ...prev,
          //   <BoardInputColumns
          //     id={Math.random() * 1000}
          //     key={Math.random() * 1000}
          //   />,
          // ]);
          console.log(columns);
        }}
      />
      <Button
        width="full"
        name="Save Changes"
        onClick={(e) => {
          e.stopPropagation();
          handleChanges();
        }}
      />
    </div>
  );
}

export default memo(EditBoard);
