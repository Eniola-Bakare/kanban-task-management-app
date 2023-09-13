function Logo() {
  return (
    <div className="flex w-full items-center border-r-2 py-3 pt-7 px-10 border-r-neutral">
      {/* <div className="logo-image w-['40%']"> */}
        <img src="./logo-light.svg" className="w-['100%'] h-16" />
      {/* </div> */}
      <p className="logo-text text-4xl font-black pb-2">Kanban</p>
    </div>
  );
}

export default Logo;
