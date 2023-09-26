import { useBoardsContext } from "../Contexts/ContextApi";
import StatusSelect from "./StatusSelect";
import Subtasks from "./Subtasks";

function Tasks() {
  const { currentTask, currentBoard } = useBoardsContext();
  return (
    <div className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col  gap-5">
      <p className="text-black dark:text-white font-bold text-lg">
        {currentTask.title}
      </p>
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
          className="status outline-none appearance-none bg-[url('/chevronDown.png')]  bg-no-repeat bg-white bg-right w-[100%]"
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
