import NavigationBar from "./NavigationBar";
import { useInView } from "react-intersection-observer";
import HeaderTitle from "./HeaderTitle";

function HeroPage() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25, 
  });
  return (
    <div ref={ref} className="flex flex-col items-center w-full h-screen px-8 pr-8">
      <NavigationBar className={!inView && 'fixed bg-white'}/>
      <HeaderTitle />
    </div>
  );
}

export default HeroPage;
