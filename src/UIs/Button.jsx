function Button({
  name = "Button",
  btnType = "primary",
  width = "min",
  onClick,
}) {
  if (btnType === "primary") {
    return (
      <button
        className={`cursor-pointer bg-purple-primary text-white w-${width} h-['48px'] rounded-3xl px-4 py-2`}
        onClick={onClick}
      >
        <span className="cursor-pointer font-semibold text-lg"> {name}</span>
      </button>
    );
  } else if (btnType === "secondary") {
    return (
      <button
        className={`cursor-pointer bg-neutral text-purple-primary  w-${width} h-['48px'] rounded-3xl px-4 py-2`}
        onClick={onClick}
      >
        <span className="cursor-pointer font-semibold text-lg"> {name}</span>
      </button>
    );
  } else if (btnType === "danger") {
    return (
      <button
        className={`cursor-pointer bg-danger-solid text-white`}
        onClick={onClick}
      >
        <span className="cursor-pointer font-semibold text-lg"> {name}</span>
      </button>
    );
  }
}

export default Button;
