import { produce } from "immer";
import Nav_Logo from "../../img/logo.png";
import Scroll from "../../components/Scroll";
import Button from "../../components/Button";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "MouseEnter") {
    state.currentHover = action.payload;
    state.isHover = true;
  } else if (action.type === "MouseLeave") {
    state.isHover = false;
    state.currentHover = 0;
  }
};
function NavigationBar({ className }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // const [isHover, setIsHover] = useState(false);
  // const [isHover, setIsHover] = useState(false);
  const [state, dispatch] = useReducer(produce(reducer), {
    currentHover: 0,
    isHover: false,
  });

  const scrolls = [
    {
      id: 1,
      name: "Features",
      label: "features",
    },
    {
      id: 2,
      name: "Operations",
      label: "operations",
    },
    {
      id: 3,
      name: "Testimonials",
      label: "testimonials",
    },
  ];

  const handleMouseEnter = (index) => {
    dispatch({
      type: "MouseEnter",
      payload: index,
    });
  };

  const handleMouseLeave = (index) => {
    dispatch({
      type: "MouseLeave",
    });
  };

  const rendredScrollTab = scrolls.map((scroll) => {
    return (
      <Scroll
        key={scroll.id}
        id={scroll.id}
        className="pl-8"
        selector={`#${scroll.label}`}
        onMouseEnter={() => handleMouseEnter(scroll.id)}
        onMouseLeave={() => handleMouseLeave()}
        isHover={state.isHover}
        currentHover={state.currentHover}
      >
        {scroll.name}
      </Scroll>
    );
  });

  const classes = classNames(
    className,
    "top-0 left-0 w-full h-20 flex flex-row justify-between px-12 m-0 items-center z-50 opacity-95 transition-all duration-500",
    `${!inView && "-translate-y-1/2"}`
  );

  return (
    <div ref={ref} className={classes}>
      <div>
        <img src={Nav_Logo} alt="navigation logo" className="w-40" />
      </div>
      <div className="flex items-center text-sm">
        <div className="flex">{rendredScrollTab}</div>
        <Button className="ml-8 py-3 px-6 pb-2.5">Open Account</Button>
      </div>
    </div>
  );
}

export default NavigationBar;
