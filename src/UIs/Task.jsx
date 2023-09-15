function Task({ task }) {
  return (
    <div className="bg-white m-2 rounded-lg px-3 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 dark:bg-grey-dark ml-0">
      <p className="font-bold text-black text-sm dark:text-white">
        {" "}
        {task.title}
      </p>
      <p className="number-of-substacks font-semibold mt-1 text-sm text-grey-scale">
        <span>
          0 of {task?.subtasks.reduce((acc, curr) => (acc += 1), 0)} subtasks
        </span>
      </p>
    </div>
  );
}

export default Task;
