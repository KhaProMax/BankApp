import classNames from "classnames";

function Button({ children, className, onClick, style }) {
  const classes = classNames(
    "rounded-3xl bg-primary-color hover:bg-primary-darker-color",
    className
  );
  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export default Button;
