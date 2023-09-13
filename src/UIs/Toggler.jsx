import { useState } from "react";

function Toggler() {
  const [toggleBtn, setToggleBtn] = useState(false);
  function handleToggle() {
    setToggleBtn((prev) => !prev);
  }
  return (
    <section className="toggle absolute w-[75%] bottom-0 pb-12">
      <div className="theme flex h-10 px-12 py-6 items-center justify-between gap-5 bg-neutral-light">
        <img src="./icon-light-theme.svg" alt="sun icon" className="w-4" />
        <div className="toggler h-7 w-14 rounded-3xl flex items-center cursor-pointer bg-purple-primary" onClick={handleToggle}>
          {!toggleBtn ? (
            <div className="toggle-left h-5 w-5 bg-white  rounded-full m-1 transition delay-1000 duration-1000"></div>
          ) : (
            <div className="toggle-right h-5 w-5 bg-white  rounded-full mt-1 mr-0 mb-1 ml-8 transition delay-1000 duration-1000 "></div>
          )}
        </div>{" "}
        <img src="./icon-dark-theme.svg" alt="moon icon " className="w-4" />
      </div>
      <div className="show-sidebar cursor-pointer flex w-fit gap-3 pt-3 items-center">
        <img src="./icon-hide-sidebar.svg" alt="eye icon" className="h-4" />
        <span className="font-semibold text-grey-scale text-sm">
          Hide Sidebar
        </span>
      </div>
    </section>
  );
}

export default Toggler;
