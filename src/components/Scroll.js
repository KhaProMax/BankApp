import classNames from "classnames";
import ScrollIntoView from "react-scroll-into-view";

function Scroll({
  children,
  id,
  className,
  selector,
  onMouseEnter,
  onMouseLeave,
  isHover,
  currentHover,
}) {
  let isHovered;
  if (isHover && currentHover === id) {
    isHovered =
      "opacity-100 text-primary-darker-color transition-all duration-400";
  } else if (isHover && currentHover !== id) {
    isHovered = "opacity-30 transition-all duration-400";
  } else {
    isHovered = "transition-all duration-400";
  }
  // const beHovered = `${currentHover === id ? "" : ""}`;
  const classes = classNames("items-center", className, isHovered);
  return (
    <ScrollIntoView selector={selector} smooth alignToTop>
      <button
        className={classes}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
    </ScrollIntoView>
  );
}

export default Scroll;
