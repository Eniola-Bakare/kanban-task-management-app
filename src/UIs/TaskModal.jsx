import { useBoardsContext } from "../Contexts/ContextApi";
import StatusSelect from "./StatusSelect";
import Subtasks from "./Subtasks";

function Tasks() {
  const { currentTask, currentBoard } = useBoardsContext();
  return (
    <div className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col  gap-5">
      <p>{currentTask.title}</p>
      <p>{currentTask.description}</p>

      <div className="subtasks">
        <p>Subtasks ()</p>
        {currentTask.subtasks.map((task) => (
          <Subtasks
            subTaskItem={task.title}
            isCompleted={task.isCompleted}
            key={Math.random() * 230}
            id={Math.random() * 23456}
          />
        ))}
      </div>

      <select className="status" onClick={(e) => e.stopPropagation()}>
        {currentBoard.columns.map((col) => (
          <StatusSelect key={col.id} name={col.name} />
        ))}
      </select>
    </div>
  );
}

export default Tasks;
