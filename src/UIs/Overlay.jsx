function Overlay({ children }) {
  return (
    <div className="absolute bg-black-light/40 bottom-0 top-0 left-0 right-0 flex justify-center items-center">
      hello
      {children}
    </div>
  );
}

export default Overlay;
