import Task from "./Task";

function CurrentBoardDetails({ eachCol }) {
  return (
    <div className="grid grid-cols-1">
      {/* column header */}
      <div className="column-header rounded flex items-center gap-3">
        <div className="rounded-full bg-purple-primary w-2 h-2"></div>
        <span className="text-grey-scale font-medium uppercase">
          {eachCol?.name} ( {eachCol?.tasks?.reduce((acc) => (acc += 1), 0)} )
        </span>
      </div>
      {/* tasks items */}
      {eachCol?.tasks?.map((task) => (
        <Task task={task} key={task.title} />
      ))}
    </div>
  );
}

export default CurrentBoardDetails;
