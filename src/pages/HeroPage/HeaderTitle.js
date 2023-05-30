import Hero from "../../img/hero.png";
import Scroll from "../../components/Scroll";
import { BsArrowDown } from "react-icons/bs";

function HeaderTitle() {
  return (
    <div className="max-w-4xl flex-1 grid grid-cols-[3fr_2fr] items-center justify-center justify-items-start content-center gap-y-6">
      <h1 className="text-5xl font-semibold leading-tight">
        When{" "}
        <span className="relative">
          <span className="absolute bg-gradient-to-br from-conifer-300 to-keppel-400 w-full h-full bottom-0 left-0 z-[-1] opacity-70 scale-x-110 scale-y-110 -skew-x-12"></span>
          banking
        </span>{" "}
        meets
        <br />
        <span className="relative">
          <span className="absolute bg-gradient-to-br from-conifer-300 to-keppel-400 w-full h-full bottom-0 left-0 z-[-1] opacity-70 scale-x-110 scale-y-110 -skew-x-12"></span>
          minimalist
        </span>
      </h1>
      <p className="text-xl font-normal">
        A simpler banking experience for a simpler life.
      </p>
      <Scroll
        selector={"#features"}
        className="flex flex-row text-primary-color text-base underline underline-offset-4"
      >
        Learn more <BsArrowDown />
      </Scroll>
      <img
        src={Hero}
        alt="hero.png"
        className="w-full row-start-1 row-end-5 col-start-2 -translate-y-12"
      />
    </div>
  );
}

export default HeaderTitle;
