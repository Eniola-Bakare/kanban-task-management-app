import { useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";
import StatusSelect from "./StatusSelect";
import Subtasks from "./Subtasks";

function Tasks() {
  const { currentTask, currentBoard } = useBoardsContext();
  const [taskMenu, setTaskMenu] = useState(false);

  return (
    <div
      className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col  gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="task-header flex justify-between items-center relative">
        <p className="text-black dark:text-white font-bold text-lg">
          {currentTask.title}
        </p>
        <img
          src="./icon-vertical-ellipsis.svg"
          className="cursor-pointer"
          onClick={() => setTaskMenu((prev) => !prev)}
        />
        {taskMenu && (
          <div className="w-[40%] z-40 absolute top-10 -right-[110px] bg-white dark:bg-grey-light px-5 py-6 rounded-lg h-fit flex flex-col gap-5">
            <p
              className="text-grey-scale font-medium"
              onClick={() => {
                // setShowBoardEditForm(true);
                // setTaskMenu(false);
              }}
            >
              Edit Task
            </p>
            <p
              className="text-danger-solid font-medium"
              onClick={() => {
                // setShowDelete(true);
                // setTaskMenu(false);
              }}
            >
              Delete Task
            </p>
          </div>
        )}
      </div>
      <p className="text-gray-scale text-grey-scale font-medium text-sm">
        {currentTask.description}
      </p>

      <div className="subtasks ">
        <p className="font-bold text-grey-scale pb-5">Subtasks (2 of 3)</p>
        <div className="subTasks flex flex-col gap-3">
          {currentTask.subtasks.map((task) => (
            <Subtasks
              subTaskItem={task.title}
              isCompleted={task.isCompleted}
              key={Math.random() * 230}
              id={Math.random() * 23456}
            />
          ))}
        </div>
      </div>

      <section className="status border border-grey-scale/40 w-full rounded p-3">
        <select
          className="status outline-none appearance-none bg-[url('/chevronDown.png')]  bg-no-repeat bg-white bg-right w-[100%] cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
            {currentBoard.columns.map((col) => (
              <StatusSelect key={col.id} name={col.name} />
            ))}
        </select>
      </section>
    </div>
  );
}

export default Tasks;
