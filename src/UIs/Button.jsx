function Button({ name = "Button", btnType = "primary", size = "large" }) {
  if (btnType === "primary" && size === "large") {
    return (
      <button className="cursor-pointer bg-purple-primary text-white w-['164px'] h-['48px'] rounded-3xl px-4 py-2">
        <span className="cursor-pointer text text-lg"> {name}</span>
      </button>
    );
  } else if (btnType === "primary" && size === "small") {
    return <button className="cursor-pointer bg-purple-primary text-white">{name}</button>;
  } else if (btnType === "secondary" && size === "large") {
    return <button className="cursor-pointer bg-purple-primary/10 text-white">{name}</button>;
  } else if (btnType === "secondary" && size === "small") {
    return <button className="cursor-pointer bg-purple-primary/10 text-white">{name}</button>;
  } else if (btnType === "danger" && size === "large") {
    return <button className="cursor-pointer bg-danger-solid text-white">{name}</button>;
  } else if (btnType === "danger" && size === "small") {
    return <button className="cursor-pointer bg-purple-primary text-white">{name}</button>;
  }
}

export default Button;
