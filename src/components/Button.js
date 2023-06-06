import classNames from "classnames";

function Button({ children, className, onClick, style, onMouseEnter, onMouseLeave }) {
  const classes = classNames(
    "rounded-3xl bg-primary-color hover:bg-primary-darker-color",
    className
  );
  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export default Button;
