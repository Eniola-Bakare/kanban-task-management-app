import { useBoardsContext } from "../Contexts/ContextApi";

function Overlay({ children }) {
  const { setShowBoardForm } = useBoardsContext();
  return (
    <div
      className="absolute bg-black-light/50 bottom-0 top-0 left-0 right-0 flex justify-center items-center"
      onClick={() => setShowBoardForm(false)}
    >
      {children}
    </div>
  );
}

export default Overlay;
