function Button({ name = "Button", btnType = "primary", size = "large" }) {
  if (btnType === "primary" && size === "large") {
    return <button className="bg-purple-primary text-white">{name}</button>;
  } else if (btnType === "primary" && size === "small") {
    return <button className="bg-purple-primary text-white">{name}</button>;
  } else if (btnType === "secondary" && size === "large") {
    return <button className="bg-purple-primary/10 text-white">{name}</button>;
  } else if (btnType === "secondary" && size === "small") {
    return <button className="bg-purple-primary/10 text-white">{name}</button>;
  } else if (btnType === "danger" && size === "large") {
    return <button className="bg-danger-solid text-white">{name}</button>;
  } else if (btnType === "danger" && size === "small") {
    return <button className="bg-purple-primary text-white">{name}</button>;
  }
}

export default Button;
