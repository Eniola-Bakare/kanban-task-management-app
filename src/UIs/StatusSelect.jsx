import { useBoardsContext } from "../Contexts/ContextApi";

function StatusSelect({ name }) {
  const { setTaskStatus, setShowStatus } = useBoardsContext();

  return (
    <option
      className="text-grey-scale pb-3 font-medium"
      value={name}
      onClick={(e) => {
        e.stopPropagation();
        setTaskStatus(name);
        setShowStatus(false);
      }}
    >
      {name}
    </option>
  );
}

export default StatusSelect;
