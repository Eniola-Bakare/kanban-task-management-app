function Logo() {
  return (
    <div className="flex w-full items-center border-r-2 py-4 px-10 border-r-grey-light">
        <img src="./logo-light.svg" className="w-['100%'] h-16" />
      <p className="logo-text text-4xl font-black pb-2 dark:text-white">Kanban</p>
    </div>
  );
}

export default Logo;
